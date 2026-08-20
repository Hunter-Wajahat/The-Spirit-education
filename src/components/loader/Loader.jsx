import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loaderOverlay">
      <div className="loaderContent">

        <div className="loaderCircle">
          <span></span>
        </div>

        <p>Loading...</p>

      </div>
    </div>
  );
};

export default Loader;