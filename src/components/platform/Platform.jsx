import React from "react";
import "./Platforms.css";
import zoomIcon from '../../assets/zoomLogo.webp'
import meet from '../../assets/meet.webp'
import whatsappIcon from '../../assets/whatsapp icon.webp'
import team from '../../assets/microsoft_team.webp'

const Platforms = () => {
  return (
    <section className="platformSection">

      <div className="platformContainer">

        {/* Header */}
        <div className="platformHeader">

          <span className="platformTag">
            Online Learning
          </span>

          <h1>
            Learn from wherever
            <span> you're comfortable.</span>
          </h1>

          <p>
            Join your Quran classes through the platform that works best
            for you. We offer flexible online learning through popular
            communication platforms.
          </p>

        </div>


        {/* Platforms */}
        <div className="platformGrid">

          {/* Zoom */}
          <div className="platformCard">

            <div className="platformIcon zoomIcon">
              <img height="50px" src={zoomIcon}/>
            </div>

            <div className="platformInfo">
              <h2>Zoom</h2>

              <p>
                Join live one-to-one Quran classes through Zoom with
                clear audio and video.
              </p>
            </div>

            <span className="platformStatus">
              Available
            </span>

          </div>


          {/* WhatsApp */}
          <div className="platformCard">

            <div className="platformIcon whatsappIcon">
              <img height="50px" src={whatsappIcon}/>
            </div>

            <div className="platformInfo">
              <h2>WhatsApp</h2>

              <p>
                Stay connected with your teacher, receive learning material,
                and communicate easily through WhatsApp.
              </p>
            </div>

            <span className="platformStatus">
              Available
            </span>

          </div>


          {/* Google Meet */}
          <div className="platformCard">

            <div className="platformIcon meetIcon">
              <img height="50px" src={meet}/>
            </div>

            <div className="platformInfo">
              <h2>Google Meet</h2>

              <p>
                Attend your Quran lessons through Google Meet with a simple
                and convenient online experience.
              </p>
            </div>

            <span className="platformStatus">
              Available
            </span>

          </div>
          <div className="platformCard">

            <div className="platformIcon meetIcon">
              <img height="50px" src={team}/>
            </div>

            <div className="platformInfo">
              <h2>Microsoft Team</h2>

              <p>
                Attend your Quran lessons through Microsoft Team with a simple
                and convenient online experience.
              </p>
            </div>

            <span className="platformStatus">
              Available
            </span>

          </div>


          {/* Other */}
          <div className="platformCard">

            <div className="platformIcon otherIcon">
              +
            </div>

            <div className="platformInfo">
              <h2>Another Platform</h2>

              <p>
                Prefer another platform? Let us know and we can discuss
                a suitable option for your classes.
              </p>
            </div>

            <span className="platformStatus">
              Flexible
            </span>

          </div>

        </div>


        {/* Bottom Message */}
        <div className="platformNote">

          <span>✦</span>

          <p>
            <strong>Your comfort matters.</strong> Choose the platform
            that is easiest and most convenient for you.
          </p>

        </div>

      </div>

    </section>
  );
};

export default Platforms;