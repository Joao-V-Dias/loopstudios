import React from "react";
import "./styles.css";
import logo from "../../images/logo.svg";
import Navigator from "../Navigator/Navigator";
import iconFacebook from "../../images/icon-facebook.svg";
import iconTwitter from "../../images/icon-twitter.svg";
import iconPinterest from "../../images/icon-pinterest.svg";
import iconInstagram from "../../images/icon-instagram.svg";

function Footer() {
  return (
    <footer>
      <div className="footer-nav">
        <a href="">
          <img src={logo} alt="" />
        </a>
        <Navigator />
      </div>
      <div className="footer-social-media">
        <div className="social-media">
          <a href="">
            <img src={iconFacebook} alt="" />
            <div className="bar"></div>
          </a>
          <a href="">
            <img src={iconTwitter} alt="" />
            <div className="bar"></div>
          </a>
          <a href="">
            <img src={iconPinterest} alt="" />
            <div className="bar"></div>
          </a>
          <a href="">
            <img src={iconInstagram} alt="" />
            <div className="bar"></div>
          </a>
        </div>
        <p>© 2021 Loopstudios. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
