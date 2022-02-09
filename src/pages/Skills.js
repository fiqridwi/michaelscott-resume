import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward, faCircleCheck } from "@fortawesome/free-solid-svg-icons";

export default class Skills extends Component {
  render() {
    return (
      <div className="section">
        <h1>Skills</h1>
        <div className="skills-list">
          <div className="skills-item">
            <FontAwesomeIcon
              icon={faCircleCheck}
              className="icon-award"
              size="xl"
              className="icon-check"
            />{" "}
            <p className="mar-left">Paper Sales</p>
          </div>
          <div className="skills-item">
            <FontAwesomeIcon
              icon={faCircleCheck}
              className="icon-award"
              size="xl"
              className="icon-check"
            />{" "}
            <p className="mar-left">Party Planning</p>
          </div>
          <div className="skills-item">
            <FontAwesomeIcon
              icon={faCircleCheck}
              className="icon-award"
              size="xl"
              className="icon-check"
            />{" "}
            <p className="mar-left">Public Speaking</p>
          </div>
          <div className="skills-item">
            <FontAwesomeIcon
              icon={faCircleCheck}
              className="icon-award"
              size="xl"
              className="icon-check"
            />{" "}
            <p className="mar-left">Improvisational Acting</p>
          </div>
          <div className="skills-item">
            <FontAwesomeIcon
              icon={faCircleCheck}
              className="icon-award"
              size="xl"
              className="icon-check"
            />{" "}
            <p className="mar-left">Team Management</p>
          </div>
        </div>
      </div>
    );
  }
}
