import React from "react";
import "./CourseSections.css";

const QuranTranslation = () => {
  const quranTranslation = [
       {
      indexNumber:"01",
      courseTitle: "Quranic Vocabulary",
      shortSummery: "Build familiarity with commonly used words and expressions found in the Quran."
    },
    {
      indexNumber: "02",
      courseTitle: "Word-by-Word Translation",
      shortSummery: "Understand the meaning of important Quranic words and phrases."
    },
    {
      indexNumber: "03",
      courseTitle: "Ayah Translation",
      shortSummery: "Study the meaning of complete verses in an easy-to-understand way."
    },
    {
      indexNumber: "04",
      courseTitle: "Understanding the Message",
      shortSummery: "Explore the guidance and lessons contained within selected verses."
    },
    {
      indexNumber: "05",
      courseTitle: "Selected Surah Study",
      shortSummery: "Study selected Surahs with their translation and important lessons."
    },
    {
      indexNumber: "06",
      courseTitle: "Basic Tafsir",
      shortSummery: "Gain introductory knowledge of the context and explanation of selected Quranic passages."
    },
  ]
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
        {quranTranslation.map(quran=>(
          <a target="_blank" href={`https://wa.me/923446364513?text=i'm%20intrested%20in%20learning%20${quran.courseTitle}`}>

          <div className="courseTopic">
            <span>{quran.indexNumber}</span>
            <h3>{quran.courseTitle}</h3>
            <p>
              {quran.shortSummery}
            </p>
          </div>
          </a>
          ))}

        </div>

      </div>

    </section>
  );
};

export default QuranTranslation;