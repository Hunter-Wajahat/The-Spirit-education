import React from "react";
import "./CourseSections.css";

const BasicQaida = () => {
  const Basic_qaida = [
    {
      indexNumber: '01',
      courseTitle: "Arabic Letters",
      shortSummery: "Recognize and correctly pronounce the Arabic letters."
    },
    {
      indexNumber: '02',
      courseTitle: "Harakaat",
      shortSummery: "Learn Fatha, Kasra, Damma and their correct pronunciation."
    },
    {
      indexNumber: '03',
      courseTitle: "Tanween",
      shortSummery: "Understand the basic sounds and usage of Tanween."
    },
    {
      indexNumber: '04',
      courseTitle: "Sukoon",
      shortSummery: "Learn how letters with Sukoon are pronounced correctly."
    },
    {
      indexNumber: '05',
      courseTitle: "Tashdeed",
      shortSummery: "Understand doubled letters and practice their pronunciation."
    },
    {
      indexNumber: '06',
      courseTitle: "Madd",
      shortSummery: "Learn the basics of stretching sounds while reading."
    },
    {
      indexNumber: '07',
      courseTitle: "Joining Letters",
      shortSummery: "Practice connecting Arabic letters to form readable words."
    },
    {
      indexNumber: '08',
      courseTitle: "Quran Reading Practice",
      shortSummery: "Apply the lessons through guided Quran reading practice."
    },
  ]
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
        {Basic_qaida.map(qaida=>(
          <a target="_blank" href={`https://wa.me/923446364513?text=i'm%20intrested%20in%20learning%20${qaida.courseTitle}`}>
          <div key={qaida.indexNumber} className="courseTopic">
            <span>{qaida.indexNumber}</span>
            <h3>{qaida.courseTitle}</h3>
            <p>
              {qaida.shortSummery}
            </p>
          </div>
          </a>
          ))}
        </div>

      </div>

    </section>
  );
};

export default BasicQaida;