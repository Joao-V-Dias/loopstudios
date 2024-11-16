import React from "react";
import "./style.css";
import earthDesktop from "../../images/desktop/image-deep-earth.jpg";
import arcadeDesktop from "../../images/desktop/image-night-arcade.jpg";
import soccerDesktop from "../../images/desktop/image-soccer-team.jpg";
import gridDesktop from "../../images/desktop/image-grid.jpg";
import aboveDesktop from "../../images/desktop/image-from-above.jpg";
import borealisDesktop from "../../images/desktop/image-pocket-borealis.jpg";
import curiosityDesktop from "../../images/desktop/image-curiosity.jpg";
import fisheyeDesktop from "../../images/desktop/image-fisheye.jpg";
import earthMobile from "../../images/mobile/image-deep-earth.jpg";
import arcadeMobile from "../../images/mobile/image-night-arcade.jpg";
import soccerMobile from "../../images/mobile/image-soccer-team.jpg";
import gridMobile from "../../images/mobile/image-grid.jpg";
import aboveMobile from "../../images/mobile/image-from-above.jpg";
import borealisMobile from "../../images/mobile/image-pocket-borealis.jpg";
import curiosityMobile from "../../images/mobile/image-curiosity.jpg";
import fisheyeMobile from "../../images/mobile/image-fisheye.jpg";

function Creations() {
  const cardCreate = [
    {
      pictureMobile: earthMobile,
      pictureDesktop: earthDesktop,
      title: "DEEP EARTH",
    },
    {
      pictureMobile: arcadeMobile,
      pictureDesktop: arcadeDesktop,
      title: "NIGHT ARCADE",
    },
    {
      pictureMobile: soccerMobile,
      pictureDesktop: soccerDesktop,
      title: "SOCCER TEAM VR",
    },
    {
      pictureMobile: gridMobile,
      pictureDesktop: gridDesktop,
      title: "THE GRID",
    },
    {
      pictureMobile: aboveMobile,
      pictureDesktop: aboveDesktop,
      title: "FROM UP ABOVE VR",
    },
    {
      pictureMobile: borealisMobile,
      pictureDesktop: borealisDesktop,
      title: "POCKET BOREALIS",
    },
    {
      pictureMobile: curiosityMobile,
      pictureDesktop: curiosityDesktop,
      title: "THE CURIOSITY",
    },
    {
      pictureMobile: fisheyeMobile,
      pictureDesktop: fisheyeDesktop,
      title: "MAKE IT FISHEYE",
    },
  ];

  return (
    <div className="creations">
      <div className="title-creations">
        <h3>OUR CREATIONS</h3>
        <a href="" className="link-all" id="link-title">
          SEE ALL
        </a>
      </div>
      <div className="creations-cards">
        {cardCreate.map((card) => {
          return (
            <a href="" className="card" key={card.title}>
              <picture>
                <source
                  media="(min-width: 376px)"
                  srcset={card.pictureDesktop}
                />
                <source
                  media="(max-width: 375px)"
                  srcset={card.pictureMobile}
                />
                <img src={card.pictureDesktop} alt={card.title} />
              </picture>
              <h5 className="title">{card.title}</h5>
            </a>
          );
        })}
      </div>
      <a href="" className="link-all" id="link-footer">
        SEE ALL
      </a>
    </div>
  );
}

export default Creations;
