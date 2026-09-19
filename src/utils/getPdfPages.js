async function getPdfImages(docUrl, canvasRef, pageNumber) {
    // const docUrl = `${import.meta.env.VITE_SERVER_URL}/api/read_qaida`;

    const pdfFile = pdfjsLib.getDocument({
      url:docUrl,
    });

    const pdf = await pdfFile.promise;
    console.log("Total pages:", pdf.numPages);
    const page = await pdf.getPage(pageNumber);

    const scale = 1.5;
    const viewport = page.getViewport({scale})

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d")


    canvas.width = viewport.width;
    canvas.height = viewport.height;

 await page.render({
      canvasContext: context,
      viewport: viewport
    }).promise;

  }

 export default getPdfImages;