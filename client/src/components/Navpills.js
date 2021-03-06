import React from "react";
import { Link } from "react-router-dom";

const Navpills = () =>
  <ul className="nav nav-tabs">
    <li className={window.location.pathname === "/form" ? "active" : ""}>
      <Link to="/form">Sign Up</Link>
    </li>
    <li className={window.location.pathname === "/" ? "active" : ""}>
      <Link to="/">Login</Link>
    </li>
  </ul>;

export default Navpills;
