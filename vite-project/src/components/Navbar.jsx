import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-left">
        <li>Home</li>
        <li>Planets</li>
        <li>Gallery</li>
      </ul>

      <h1 className="brand">Space Tour</h1>

      <ul className="nav-right">
        <li>Explore</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
