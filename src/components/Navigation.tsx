import React from "react";
import { NavLink } from "react-router-dom";

// styles
import "./Navigation.scss";

const Navigation = () => {
  return (
    <nav>
      <NavLink className="nav-link" to="/">
        Main
      </NavLink>
      <NavLink className="nav-link" to="/projects">
        Projects
      </NavLink>
      <NavLink className="nav-link" to="/links">
        Links
      </NavLink>
    </nav>
  );
};

export default Navigation;
