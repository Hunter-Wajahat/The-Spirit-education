import React from 'react'
import './About.css'
const About = () => {
  return (
    <>
      <section className="about" id="about">

      <div className="aboutContainer">

        {/* Left Content */}
        <div className="aboutContent">

          <span className="aboutTag">
            About Us
          </span>

          <h2>
            Making Quranic
            <span> learning accessible to everyone.</span>
          </h2>

          <p className="aboutIntro">
            The Spirit Education is an international online Quran academy
            offering a unique learning experience for Muslims of all ages
            around the world.
          </p>

          <p>
            Our courses include Noorani Qaida, Quran reading, Namaz,
            Dua, Quran recitation, and other Islamic studies. We provide
            flexible and convenient online classes so students can learn
            the Quran from the comfort of their own homes.
          </p>


          {/* Features */}
          <div className="aboutFeatures">

            <div className="aboutFeature">
              <div className="featureIcon">✓</div>

              <div>
                <h4>Learn From Anywhere</h4>
                <p>
                  Join classes from anywhere in the world.
                </p>
              </div>
            </div>

            <div className="aboutFeature">
              <div className="featureIcon">✓</div>

              <div>
                <h4>Flexible Learning</h4>
                <p>
                  Convenient classes designed around your schedule.
                </p>
              </div>
            </div>

          </div>


          <button className="aboutBtn">
            Discover More
            <span>→</span>
          </button>

        </div>


        {/* Right Visual */}
        <div className="aboutVisual">

          <div className="aboutShape"></div>

          <div className="aboutCard">

            <div className="aboutCardIcon">
              ۞
            </div>

            <span className="cardSmallTitle">
              OUR MISSION
            </span>

            <h3>
              Bringing the light of the Quran
              into everyday life.
            </h3>

            <div className="cardLine"></div>

            <p>
              Learn, understand and strengthen your
              connection with the Quran.
            </p>

          </div>


          <div className="experienceBadge">
            <strong>100%</strong>
            <span>Online Learning</span>
          </div>

        </div>

      </div>

    </section>
    </>
  )
}

export default About
