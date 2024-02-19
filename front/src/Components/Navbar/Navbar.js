import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="bordered">
      <div className="logo">
        <Link to="/">JobSphere</Link>
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/opportunities">Opportunities</Link>
        </li>
        <li>
          <Link to="/aboutus">About Us</Link>
        </li>
        <li className="auth">
          <Link to="/login">Log in</Link>
          <Link to="/signup">Sign up</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;