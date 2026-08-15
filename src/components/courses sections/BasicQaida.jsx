import React from "react";
import "./CourseSections.css";

const BasicQaida = () => {
  return (
    <section className="courseSection">

      <div className="courseSectionContainer">

        <div className="courseSectionHeader">
          <span className="courseSectionTag">
            Quran Reading Foundation
          </span>

          <h1>
            Basic <span>Qaida</span>
          </h1>

          <p>
            Build a strong foundation in Arabic letters, pronunciation,
            and reading before progressing toward fluent Quran recitation.
          </p>
        </div>


        <div className="courseTopics">

          <div className="courseTopic">
            <span>01</span>
            <h3>Arabic Letters</h3>
            <p>
              Recognize and correctly pronounce the Arabic letters.
            </p>
          </div>

          <div className="courseTopic">
            <span>02</span>
            <h3>Harakaat</h3>
            <p>
              Learn Fatha, Kasra, Damma and their correct pronunciation.
            </p>
          </div>

          <div className="courseTopic">
            <span>03</span>
            <h3>Tanween</h3>
            <p>
              Understand the basic sounds and usage of Tanween.
            </p>
          </div>

          <div className="courseTopic">
            <span>04</span>
            <h3>Sukoon</h3>
            <p>
              Learn how letters with Sukoon are pronounced correctly.
            </p>
          </div>

          <div className="courseTopic">
            <span>05</span>
            <h3>Tashdeed</h3>
            <p>
              Understand doubled letters and practice their pronunciation.
            </p>
          </div>

          <div className="courseTopic">
            <span>06</span>
            <h3>Madd</h3>
            <p>
              Learn the basics of stretching sounds while reading.
            </p>
          </div>

          <div className="courseTopic">
            <span>07</span>
            <h3>Joining Letters</h3>
            <p>
              Practice connecting Arabic letters to form readable words.
            </p>
          </div>

          <div className="courseTopic">
            <span>08</span>
            <h3>Quran Reading Practice</h3>
            <p>
              Apply the lessons through guided Quran reading practice.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
};

export default BasicQaida;