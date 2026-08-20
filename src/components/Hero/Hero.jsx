import React from "react";
import "./Hero.css";
import myPicture from '../../assets/myPicture.jpg'

const Hero = () => {
  return (
    <section className="hero">

      <div className="heroContent">

        <span className="heroTag">
          Learn • Understand • Live
        </span>

        <h1>
          Learn the Quran
          <span> with Understanding</span>
        </h1>

        <p>
          Discover a meaningful journey of Quranic learning through
          authentic knowledge, guidance, and understanding from anywhere
          in the world.
        </p>

        <div className="heroButtons">
          <button className="heroPrimaryBtn">
            Explore Courses
            <span>→</span>
          </button>

          <button className="heroSecondaryBtn">
            Learn More
          </button>
        </div>

        <div className="heroStats">
          <div>
            <strong>10+</strong>
            <span>Years Teaching</span>
          </div>

          <div className="statDivider"></div>

          <div>
            <strong>25+</strong>
            <span>Countries</span>
          </div>

          <div className="statDivider"></div>

          <div>
            <strong>1000+</strong>
            <span>Students</span>
          </div>
        </div>

      </div>


      <div className="heroVisual">

        <div className="heroCircle"></div>

        <div className="quranCard">
          <div className="quranDecoration">
            ۞
          </div>

          <p className="arabicText">
            وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا
          </p>

          <span className="ayahText">
            And recite the Quran with measured recitation.
          </span>

          <span className="ayahReference">
            Al-Muzzammil · 73:4
          </span>
          {/* <img height="320px" src={myPicture} alt="" /> */}
        </div>

      </div>

    </section>
  );
};

export default Hero;