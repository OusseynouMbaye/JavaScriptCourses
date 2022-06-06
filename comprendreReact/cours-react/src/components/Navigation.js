import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>Acceuil</li>
        </NavLink>
        <NavLink
          to="/about"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>About</li>
        </NavLink>
        <NavLink to="/simpsons" className={(nav) =>(nav.isActive ? "nav-active" : "")}>
          <li>Simpsons</li>
        </NavLink>
      </ul>
    </div>
  );
};
<style></style>;
export default Navigation;
