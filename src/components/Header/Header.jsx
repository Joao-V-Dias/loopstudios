import React, { useEffect, useState } from "react";
import "./styles.css";
import logo from "../../images/logo.svg";
import Navigator from "../Navigator/Navigator";
import iconMenu from "../../images/icon-hamburger.svg";
import iconClose from "../../images/icon-close.svg";

function Header() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header>
        <a href="#">
          <img src={logo} alt="logo" />
        </a>
        {windowWidth > 690 ? (
          <Navigator />
        ) : (
          <img src={iconMenu} alt="" onClick={() => setMenuOpen(!menuOpen)} />
        )}
      </header>
      {menuOpen && (
        <div className="menu">
          <div className="menu-header">
            <img src={logo} alt="logo" className="logo" />
            <img
              src={iconClose}
              alt="Close menu"
              onClick={() => setMenuOpen(!menuOpen)}
            />
          </div>
          <Navigator />
        </div>
      )}
    </>
  );
}

export default Header;
