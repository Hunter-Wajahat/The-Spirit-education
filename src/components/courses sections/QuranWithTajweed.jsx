import React from "react";
import "./CourseSections.css";

const QuranTajweed = () => {
  return (
    <section className="courseSection">

      <div className="courseSectionContainer">

        <div className="courseSectionHeader">
          <span className="courseSectionTag">
            Quranic Studies
          </span>

          <h1>
            Quran with <span>Tajweed</span>
          </h1>

          <p>
            Learn to recite the Quran correctly by understanding the rules
            of pronunciation, articulation, and proper recitation.
          </p>
        </div>


        <div className="courseTopics">

          <div className="courseTopic">
            <span>01</span>
            <h3>Makharij al-Huruf</h3>
            <p>
              Learn the correct points of articulation of Arabic letters.
            </p>
          </div>

          <div className="courseTopic">
            <span>02</span>
            <h3>Sifaat al-Huruf</h3>
            <p>
              Understand the characteristics and qualities of Quranic letters.
            </p>
          </div>

          <div className="courseTopic">
            <span>03</span>
            <h3>Noon Saakin & Tanween</h3>
            <p>
              Learn the essential rules related to Noon Saakin and Tanween.
            </p>
          </div>

          <div className="courseTopic">
            <span>04</span>
            <h3>Meem Saakin</h3>
            <p>
              Understand the rules of Meem Saakin during Quranic recitation.
            </p>
          </div>

          <div className="courseTopic">
            <span>05</span>
            <h3>Madd</h3>
            <p>
              Learn the different types of elongation used in Quranic recitation.
            </p>
          </div>

          <div className="courseTopic">
            <span>06</span>
            <h3>Qalqalah</h3>
            <p>
              Practice the correct pronunciation of letters with Qalqalah.
            </p>
          </div>

          <div className="courseTopic">
            <span>07</span>
            <h3>Ghunnah</h3>
            <p>
              Learn the correct nasal sound and its application in recitation.
            </p>
          </div>

          <div className="courseTopic">
            <span>08</span>
            <h3>Waqf & Ibtida</h3>
            <p>
              Understand where to stop and where to begin while reciting.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
};

export default QuranTajweed;