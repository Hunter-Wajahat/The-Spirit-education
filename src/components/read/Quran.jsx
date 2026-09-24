import React, { useRef, useState, useEffect } from 'react';
import './Quran.css';
import getPdfImages from '../../utils/getPdfPages';

const Quran = () => {

  const canvasRef = useRef(null)
  const [pageNumber, setpageNumber] = useState(1)



  useEffect( () => {
    const docUrl = `${import.meta.env.VITE_SERVER_URL}/api/read/quran`;
    getPdfImages(docUrl, canvasRef, pageNumber)
  }, [pageNumber])

  const numbersOfPages = Array.from({ length: 1048 }, (_, index) => index + 1)


  return (
    <div className="quran_container">

      <div className="quran_controls">

        <button
          onClick={() => setpageNumber(pre => pre - 1)}
          disabled={pageNumber === 1}
          className="quran_nav_btn">
          <span>←</span>
          <p>Previous</p>
        </button>

        <div className="quran_page_selector">
          <label htmlFor="quranPage">Page</label>

          <select onClick={(e) => setpageNumber(parseInt(e.currentTarget.value))} id="quranPage" defaultValue={pageNumber}>
            {numbersOfPages.map((page) => (
              <option key={page} value={page}>{page}</option>
            ))}

          </select>

          <span>of 1048</span>
        </div>

        <button
          onClick={() => setpageNumber(pre => pre + 1)}
          disabled={pageNumber === 31}
          className="quran_nav_btn">
          <p>Next</p>
          <span>→</span>
        </button>

      </div>

      <div className="quran_page">
        <canvas ref={canvasRef} />
      </div>

    </div>
  );
};

export default Quran;