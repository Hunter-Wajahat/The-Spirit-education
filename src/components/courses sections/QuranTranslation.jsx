import React from "react";
import "./CourseSections.css";

const QuranTranslation = () => {
  return (
    <section className="courseSection">

      <div className="courseSectionContainer">

        <div className="courseSectionHeader">
          <span className="courseSectionTag">
            Understanding the Quran
          </span>

          <h1>
            Quran with <span>Translation</span>
          </h1>

          <p>
            Go beyond recitation and develop a deeper understanding of the
            meanings and messages of the Quran.
          </p>
        </div>


        <div className="courseTopics">

          <div className="courseTopic">
            <span>01</span>
            <h3>Quranic Vocabulary</h3>
            <p>
              Build familiarity with commonly used words and expressions
              found in the Quran.
            </p>
          </div>

          <div className="courseTopic">
            <span>02</span>
            <h3>Word-by-Word Translation</h3>
            <p>
              Understand the meaning of important Quranic words and phrases.
            </p>
          </div>

          <div className="courseTopic">
            <span>03</span>
            <h3>Ayah Translation</h3>
            <p>
              Study the meaning of complete verses in an easy-to-understand way.
            </p>
          </div>

          <div className="courseTopic">
            <span>04</span>
            <h3>Understanding the Message</h3>
            <p>
              Explore the guidance and lessons contained within selected verses.
            </p>
          </div>

          <div className="courseTopic">
            <span>05</span>
            <h3>Selected Surah Study</h3>
            <p>
              Study selected Surahs with their translation and important lessons.
            </p>
          </div>

          <div className="courseTopic">
            <span>06</span>
            <h3>Basic Tafsir</h3>
            <p>
              Gain introductory knowledge of the context and explanation
              of selected Quranic passages.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
};

export default QuranTranslation;