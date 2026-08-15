import React from "react";
import "./CourseSections.css";

const NamazKalma = () => {
  return (
    <section className="courseSection">

      <div className="courseSectionContainer">

        <div className="courseSectionHeader">
          <span className="courseSectionTag">
            Essential Islamic Learning
          </span>

          <h1>
            Namaz & <span>Kalma</span>
          </h1>

          <p>
            Learn the essentials of prayer, important Kalmas, daily duas,
            and basic practices every Muslim should know.
          </p>
        </div>


        <div className="courseTopics">

          <div className="courseTopic">
            <span>01</span>
            <h3>Six Kalmas</h3>
            <p>
              Learn the six Kalmas with correct pronunciation and understanding.
            </p>
          </div>

          <div className="courseTopic">
            <span>02</span>
            <h3>Wudu</h3>
            <p>
              Learn the proper method and essential steps of Wudu.
            </p>
          </div>

          <div className="courseTopic">
            <span>03</span>
            <h3>Adhan & Iqamah</h3>
            <p>
              Learn the words and basic understanding of Adhan and Iqamah.
            </p>
          </div>

          <div className="courseTopic">
            <span>04</span>
            <h3>Salah Preparation</h3>
            <p>
              Understand the basic requirements and preparation for Salah.
            </p>
          </div>

          <div className="courseTopic">
            <span>05</span>
            <h3>Method of Salah</h3>
            <p>
              Learn the essential steps and recitations involved in Salah.
            </p>
          </div>

          <div className="courseTopic">
            <span>06</span>
            <h3>Salah Duas</h3>
            <p>
              Learn the important duas and supplications recited during prayer.
            </p>
          </div>

          <div className="courseTopic">
            <span>07</span>
            <h3>Daily Masnoon Duas</h3>
            <p>
              Learn commonly used duas for everyday situations.
            </p>
          </div>

          <div className="courseTopic">
            <span>08</span>
            <h3>Basic Islamic Teachings</h3>
            <p>
              Develop an understanding of essential Islamic beliefs and practices.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
};

export default NamazKalma;