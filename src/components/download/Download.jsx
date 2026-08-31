import React from "react";
import "./Download.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Download = () => {
  async function downloadPara(paraNo) {
    const url = `${import.meta.env.VITE_SERVER_URL}/api/download_folder`;
    const response = await axios.get(url, {
      params:{
        paraNumber: paraNo
      }
    });
    console.log("download response: ",response)
  }
  const quranParas = [
    {
      paraNumber: "para01",
      paraName: "Alif Laam Meem"
    },
    {
      paraNumber: "para02",
      paraName: "Sayaqool"
    },
    {
      paraNumber: "para03",
      paraName: "Tilkal Rusul"
    },
    {
      paraNumber: "para04",
      paraName: "Lan Tana Loo"
    },
    {
      paraNumber: "para05",
      paraName: "Wal Mohsanat"
    },
    {
      paraNumber: "para06",
      paraName: "La Yuhibbullah"
    },
    {
      paraNumber: "para07",
      paraName: "Wa Iza Samiu"
    },
    {
      paraNumber: "para08",
      paraName: "Wa Lau Annana"
    },
    {
      paraNumber: "para09",
      paraName: "Qalal Malao"
    },
    {
      paraNumber: "para10",
      paraName: "Wa A'lamu"
    },
    {
      paraNumber: "para11",
      paraName: "Yatazeroon"
    },
    {
      paraNumber: "para12",
      paraName: "Wa Mamin Da'abat"
    },
    {
      paraNumber: "para13",
      paraName: "Wa Ma Ubarriu"
    },
    {
      paraNumber: "para14",
      paraName: "Rubama"
    },
    {
      paraNumber: "para15",
      paraName: "Subhanallazi"
    },
    {
      paraNumber: "para16",
      paraName: "Qala Alam"
    },
    {
      paraNumber: "para17",
      paraName: "Iqtaraba"
    },
    {
      paraNumber: "para18",
      paraName: "Qadd Aflaha"
    },
    {
      paraNumber: "para19",
      paraName: "Wa Qalallazina"
    },
    {
      paraNumber: "para20",
      paraName: "A'man Khalaq"
    },
    {
      paraNumber: "para21",
      paraName: "Utlu Ma Oohi"
    },
    {
      paraNumber: "para22",
      paraName: "Wa Manyaqnut"
    },
    {
      paraNumber: "para23",
      paraName: "Wa Mali"
    },
    {
      paraNumber: "para24",
      paraName: "Faman Azlam"
    },
    {
      paraNumber: "para25",
      paraName: "Elahe Yuruddu"
    },
    {
      paraNumber: "para26",
      paraName: "Ha Meem"
    },
    {
      paraNumber: "para27",
      paraName: "Qala Fama Khatbukum"
    },
    {
      paraNumber: "para28",
      paraName: "Qadd Sami Allah"
    },
    {
      paraNumber: "para29",
      paraName: "Tabarakallazi"
    },
    {
      paraNumber: "para30",
      paraName: "Amma"
    }
  ]
  return (
    <section className="downloadSection">

      <div className="downloadContainer">

        {/* Header */}
        <div className="downloadHeader">
          <span>Quran Resources</span>

          <h1>
            Download <strong>Quran</strong>
          </h1>

          <p>
            Download Paras and Surahs for reading, learning, and revision.
          </p>
        </div>


        {/* Paras */}
        <div className="downloadGroup">

          <h2>Paras</h2>

          <div className="downloadList">
            {quranParas.map((para, index)=> (

              <div className="downloadItem">
              <div>
                <span className="itemNumber">{index + 1}</span>
                <h3>{para.paraNumber} — {para.paraName}</h3>
              </div>
              <div className="buttons">

                <Link to={`/read/${para.paraNumber}`} >
                <button>Read</button>
              </Link>
                <button onClick={()=> downloadPara(para.paraNumber)}>Download ↓</button>
              </div>
            </div>
            ))}

          </div>

        </div>


        {/* Surahs */}
        {/* <div className="downloadGroup">

          <h2>Surahs</h2>

          <div className="downloadList">

            <div className="downloadItem">
              <div>
                <span className="itemNumber">01</span>
                <h3>Surah Al-Fatihah</h3>
              </div>

              <button>Download ↓</button>
            </div>

            <div className="downloadItem">
              <div>
                <span className="itemNumber">02</span>
                <h3>Surah Al-Baqarah</h3>
              </div>

              <button>Download ↓</button>
            </div>

            <div className="downloadItem">
              <div>
                <span className="itemNumber">03</span>
                <h3>Surah Aal-E-Imran</h3>
              </div>

              <button>Download ↓</button>
            </div>

            <div className="downloadItem">
              <div>
                <span className="itemNumber">04</span>
                <h3>Surah An-Nisa</h3>
              </div>

              <button>Download ↓</button>
            </div>

            <div className="downloadItem">
              <div>
                <span className="itemNumber">05</span>
                <h3>Surah Al-Ma'idah</h3>
              </div>

              <button>Download ↓</button>
            </div>

          </div>

        </div> */}

      </div>

    </section>
  );
};

export default Download;