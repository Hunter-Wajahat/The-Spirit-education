import React, { useState, useRef, useEffect } from 'react'
import './readQaida.css'
import axios from 'axios'
import * as pdfjsLib from 'pdfjs-dist';
import getPdfImages from '../../utils/getPdfPages';

pdfjsLib.GlobalWorkerOptions.workerSrc =
  new URL(
    "pdfjs-dist/build/pdf.worker.min.mjs",
    import.meta.url
  ).toString();

const ReadQaida = () => {
  const [qaidapage, setqaidapage] = useState()

  const canvasRef = useRef(null)
  const [pageNumber, setpageNumber] = useState(1)

  useEffect(() => {
    const docUrl = `${import.meta.env.VITE_SERVER_URL}/api/read_qaida`;
    getPdfImages(docUrl, canvasRef, pageNumber)
  }, [pageNumber])


  // async function getQaida() {
  //   const url = `${import.meta.env.VITE_SERVER_URL}/api/read_qaida`
  //   const response = await axios.get(url, {
  //     withCredentials: true
  //   })
  //   console.log("qaida:", response.data)
  //   setqaidapage(response.data)

  // }
  return (
    <>
      <div className="qaida_container">

        <button className='leftButton'
          onClick={() => setpageNumber(pre => pre - 1)}
          disabled={pageNumber === 1}
        >Previous</button>

        <canvas ref={canvasRef} />

        <button className='rightButton'
          onClick={() => setpageNumber(pre => pre + 1)}
          disabled={pageNumber === 31}
        >Next</button>
      </div>
    </>
  )
}

export default ReadQaida;
