import React from "react";
import "./style.css";

function Navigator() {
  return (
    <nav>
      <li>
        <a href="">About</a>
        <div className="bar"></div>
      </li>
      <li>
        <a href="">Careers</a>
        <div className="bar"></div>
      </li>
      <li>
        <a href="">Events</a>
        <div className="bar"></div>
      </li>
      <li>
        <a href="">Products</a>
        <div className="bar"></div>
      </li>
      <li>
        <a href="">Support</a>
        <div className="bar"></div>
      </li>
    </nav>
  );
}

export default Navigator;
