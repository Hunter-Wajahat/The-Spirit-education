import React from "react";
import "./CourseSections.css";

const NamazKalma = () => {
  const namazAndkalma = [
    {
      indexNumber:"01",
      courseTitle: "Six Kalmas",
      shortSummery: "Learn the six Kalmas with correct pronunciation and understanding."
    },
    {
      indexNumber: "02",
      courseTitle: "Wudu",
      shortSummery: "Learn the proper method and essential steps of Wudu."
    },
    {
      indexNumber: "03",
      courseTitle: "Adhan & Iqamah",
      shortSummery: "Learn the words and basic understanding of Adhan and Iqamah."
    },
    {
      indexNumber: "04",
      courseTitle: "Salah Preparation",
      shortSummery: "Understand the basic requirements and preparation for Salah."
    },
    {
      indexNumber: "05",
      courseTitle: "Method of Salah",
      shortSummery: "Learn the essential steps and recitations involved in Salah."
    },
    {
      indexNumber: "06",
      courseTitle: "Salah Duas",
      shortSummery: "Learn the important duas and supplications recited during prayer."
    },
    {
      indexNumber: "07",
      courseTitle: "Daily Masnoon Duas",
      shortSummery: "Learn commonly used duas for everyday situations."
    },
    {
      indexNumber: "08",
      courseTitle: "Basic Islamic Teachings",
      shortSummery: "Develop an understanding of essential Islamic beliefs and practices."
    },
  ]
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
          {namazAndkalma.map(namaz=>(

            <div className="courseTopic">
            <span>{namaz.indexNumber}</span>
            <h3>{namaz.courseTitle}</h3>
            <p>
              {namaz.shortSummery}
            </p>
          </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default NamazKalma;