import { Link, Outlet } from "react-router-dom";

import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <nav>
        <div className="nav-list">
          <Link to="/">
            <button className="nav-item">About</button>
          </Link>
          <Link to="experience">
            {" "}
            <button className="nav-item">Experience</button>
          </Link>
          <Link to="education">
            {" "}
            <button className="nav-item">Education</button>
          </Link>
          <Link to="skills">
            {" "}
            <button className="nav-item">Skills</button>
          </Link>
          <Link to="interests">
            {" "}
            <button className="nav-item">Interests</button>
          </Link>
          <Link to="awards">
            {" "}
            <button className="nav-item">Awards</button>
          </Link>
          <Outlet />
        </div>
      </nav>
    );
  }
}
