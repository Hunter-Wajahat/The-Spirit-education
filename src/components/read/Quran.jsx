import React, { useRef, useState, useEffect } from 'react';
import './Quran.css';
import axios from 'axios';
import getPdfImages from '../../utils/getPdfPages';
import PaginationBasic from '../pagination/Pagination';


const Quran = () => {

  const canvasRef = useRef(null)
  const [pageNumber, setpageNumber] = useState(1)
  const [chapter, setchapter] = useState(1)
  const [amountOfpages, setamountOfpages] = useState(null)
  const [isImageLoaded, setisImageLoaded] = useState(false)



  useEffect(() => {
    async function getLength() {
      const url =  `${import.meta.env.VITE_SERVER_URL}/api/quran/para${chapter}`;
      const response = await axios.get(url)
      setamountOfpages(response.data.filesAmount)
      setpageNumber(1)

      setisImageLoaded(true)
    }
    getLength()
  }, [chapter])
  //the amound of pages
  const numbersOfPages = Array.from({ length: 1048 }, (_, index) => index + 1)
  //the amount of chapter
  const numbersOfchapters = Array.from({ length: 30 }, (_, index) => index + 1)


  return (
    <div className="quran_container gap-4">

      <select onClick={(e)=> setchapter(e.target.value)} className='border border-blue-600 m-[20px] w-[500px] h-[50px]' name="chapters" id="chapters" aria-placeholder='Chapters'>
        {numbersOfchapters.map(chapterNumber=> (

        <option value={chapterNumber} key={chapterNumber}>Part/Chapter {chapterNumber}</option>
        ))}
      </select>
      <div className="quran_page ">
        <img className={`h-[85dvh] transition-opacity duration-700 ease-in-out opacity-100`} src={`${import.meta.env.VITE_SERVER_URL}/quran/para${chapter}/${pageNumber}.jpg`} alt="Quran page" />
      </div>
      <div>
        <PaginationBasic pageAmount={amountOfpages} updatePage={setpageNumber} pagenum={pageNumber} setloaded={setisImageLoaded} />
      </div>

    </div>
  );
};

export default Quran;