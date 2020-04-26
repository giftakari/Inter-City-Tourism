import React from "react";
import logo from "../../logo.svg";
import "./NavBar.scss";

export default function () {
  return (
    <nav className="navbar">
      <img src={logo} alt="Inter-city-Tourism" />
      <ul className="nav-links">
        <li>
          <a href="/" className="nav-link">
            Home
          </a>{" "}
        </li>
        <li>
          <a href="/about" className="nav-link">
            About
          </a>{" "}
        </li>
        <li>
          <a href="/contact" className="nav-link active">
            Tours
          </a>{" "}
        </li>
      </ul>
    </nav>
  );
}
