import axios from "axios";

async function getPdfImages(docUrl, canvasRef, pageNumber) {
  // const docUrl = `${import.meta.env.VITE_SERVER_URL}/api/read_qaida`;
  const response = await axios.get(docUrl, {
    params: {
      pageNum: pageNumber
    },
     responseType: 'arraybuffer'
  })

  // const pdfFile = pdfjsLib.getDocument({
  //   url:docUrl,
  // });

  // const pdf = await pdfFile.promise;
  // console.log("Total pages:", pdf.numPages);
  // const page = await pdf.getPage(pageNumber);
  const pdfBytes = await response.data;

  const pdf = await pdfjsLib.getDocument({data:pdfBytes}).promise;
  const page = await pdf.getPage(1);

  const viewport = page.getViewport({ scale: 1.5 });

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