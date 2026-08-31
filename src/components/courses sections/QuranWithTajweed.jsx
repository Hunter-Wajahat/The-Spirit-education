import React from "react";
import "./CourseSections.css";

const QuranTajweed = () => {
  const quranTajweed = [
    {
      indexNumber: "01",
      courseTitle: "Makharij al-Huruf",
      shortSummery: "Learn the correct points of articulation of Arabic letters."
    },
    {
      indexNumber: "02",
      courseTitle: "Sifaat al-Huruf",
      shortSummery: "Understand the characteristics and qualities of Quranic letters."
    },
    {
      indexNumber: "03",
      courseTitle: "Noon Saakin & Tanween",
      shortSummery: "Learn the essential rules related to Noon Saakin and Tanween."
    },
    {
      indexNumber: "04",
      courseTitle: "Meem Saakin",
      shortSummery: "Understand the rules of Meem Saakin during Quranic recitation."
    },
    {
      indexNumber: "05",
      courseTitle: "Madd",
      shortSummery: "Learn the different types of elongation used in Quranic recitation."
    },
    {
      indexNumber: "06",
      courseTitle: "Qalqalah",
      shortSummery: "Practice the correct pronunciation of letters with Qalqalah."
    },
    {
      indexNumber: "07",
      courseTitle: "Ghunnah",
      shortSummery: "Learn the correct nasal sound and its application in recitation."
    },
    {
      indexNumber: "08",
      courseTitle: "Waqf & Ibtida",
      shortSummery: "Understand where to stop and where to begin while reciting."
    }
  ]
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
          {quranTajweed.map(tajweed => (
            <a target="_blank" href={`https://wa.me/923446364513?text=i'm%20intrested%20in%20learning%20${tajweed.courseTitle}`}>

            <div key={tajweed.indexNumber} className="courseTopic">
              <span>{tajweed.indexNumber}</span>
              <h3>{tajweed.courseTitle}</h3>
              <p>
                {tajweed.shortSummery}
              </p>
            </div>
            </a>

          ))}
        </div>

      </div>

    </section>
  );
};

export default QuranTajweed;