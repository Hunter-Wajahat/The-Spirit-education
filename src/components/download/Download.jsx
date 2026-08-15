import React from "react";
import "./Download.css";

const Download = () => {
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

            <div className="downloadItem">
              <div>
                <span className="itemNumber">01</span>
                <h3>Para 1 — Alif Laam Meem</h3>
              </div>

              <button>Download ↓</button>
            </div>

            <div className="downloadItem">
              <div>
                <span className="itemNumber">02</span>
                <h3>Para 2 — Sayaqool</h3>
              </div>

              <button>Download ↓</button>
            </div>

            <div className="downloadItem">
              <div>
                <span className="itemNumber">03</span>
                <h3>Para 3 — Tilkal Rusul</h3>
              </div>

              <button>Download ↓</button>
            </div>

            <div className="downloadItem">
              <div>
                <span className="itemNumber">04</span>
                <h3>Para 4 — Lan Tana Loo</h3>
              </div>

              <button>Download ↓</button>
            </div>

            <div className="downloadItem">
              <div>
                <span className="itemNumber">05</span>
                <h3>Para 5 — Wal Mohsanat</h3>
              </div>

              <button>Download ↓</button>
            </div>

          </div>

        </div>


        {/* Surahs */}
        <div className="downloadGroup">

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

        </div>

      </div>

    </section>
  );
};

export default Download;