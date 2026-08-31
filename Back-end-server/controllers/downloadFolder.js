const path = require("path");
const fs = require("fs");
const { ZipArchive } = require("archiver");

function downloadFolder(req, res) {
    
    const {paraNumber} = req.query
    const folderPath = path.join(
        __dirname,
        "..",
        "public",
        "quran",
        paraNumber
    );

    console.log("Folder:", folderPath);

    if (!fs.existsSync(folderPath)) {
        return res.status(404).json({
            error: "Folder not found"
        });
    }

    // Tell browser this response is a ZIP download
    res.setHeader("Content-Type", "application/zip");
    res.setHeader(
        "Content-Disposition",
        `attachment; filename="${paraNumber}.zip"`
    );

    // Create ZIP archive
    const archive = new ZipArchive({
        zlib: {
            level: 9
        }
    });

    archive.on("warning", (err) => {
        console.warn("Archive warning:", err);
    });

    archive.on("error", (err) => {
        console.error("Archive error:", err);

        if (!res.headersSent) {
            res.status(500).json({
                error: err.message
            });
        } else {
            res.destroy(err);
        }
    });

    // Stream the ZIP directly to the response
    archive.pipe(res);

    // Add everything inside para01
    // false means don't create an extra "para01" directory
    archive.directory(folderPath, false);

    // Finish the ZIP
    archive.finalize();
}

module.exports = downloadFolder;