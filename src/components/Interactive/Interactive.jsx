import React from "react";
import "./style.css";
import interactiveImg from "../../images/desktop/image-interactive.jpg";

function Interactive() {
  return (
    <div className="interactive">
      <img src={interactiveImg} alt="" />
      <div className="text-interactive">
        <h2>The leader in interactive VR</h2>
        <p>
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
    </div>
  );
}

export default Interactive;
