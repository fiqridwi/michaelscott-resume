import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward } from "@fortawesome/free-solid-svg-icons";

export default class Awards extends Component {
  render() {
    return (
      <div className="section">
        <h1>Awards</h1>
        <div className="awards-list">
          <div className="awards-item">
            {" "}
            <FontAwesomeIcon icon={faAward} className="icon-award" size="xl" />
            <p className="mar-left">Winner of over 17 Dundies Awards</p>
          </div>
          <div className="awards-item">
            {" "}
            <FontAwesomeIcon icon={faAward} className="icon-award" size="xl" />
            <p className="mar-left">
              {" "}
              Numerous Speaking Engagements discussing Michael Scott Mangement
              Secrets
            </p>
          </div>
          <div className="awards-item">
            {" "}
            <FontAwesomeIcon icon={faAward} className="icon-award" size="xl" />
            <p className="mar-left">
              {" "}
              Scott’s Tots, offering full-ride scholarships to underprivilleged
              students
            </p>
          </div>
          <div className="awards-item">
            {" "}
            <FontAwesomeIcon icon={faAward} className="icon-award" size="xl" />
            <p className="mar-left">
              {" "}
              Michales Scott’s Dunder-Mifflin Scranton Meredith Palmer Celebrity
              Rabies Awareness Pro-Am Fun Run Run Race for the Cure, organized
              to raise money for Meredith Palmer, rabies victim
            </p>
          </div>
          <div className="awards-item">
            {" "}
            <FontAwesomeIcon icon={faAward} className="icon-award" size="xl" />
            <p className="mar-left">
              Primary Inverstor in exciting business startup a{" "}
              <a
                href="https://theoffice.fandom.com/wiki/WUPHF.com"
                target="_blank"
              >
                wuphf.com
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
