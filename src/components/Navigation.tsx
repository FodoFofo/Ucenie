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
        Projectsssssssssssssssssssss
      </NavLink>
      <NavLink className="nav-link" to="/links">
        Links
      </NavLink>
      {/*<NavLink className="nav-link" to="/teoria">
        Teória
      </NavLink>*/}
    </nav>
  );
};

export default Navigation;
