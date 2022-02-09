import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export default class About extends Component {
  render() {
    return (
      <div className="section">
        <h1 className="title">Michael Garry Scott</h1>
        <div className="about-phone-web">
          <h3 className="about-phone">570-555-1212 </h3>
          <h3 className="about-web">michaelscott.com</h3>
        </div>
        <p className="p-justify">
          {" "}
          <b>
            {" "}
            Senior leader with 254 years of experience in branch management,
            sales leadership, and warehouse operations.
          </b>
          Proven track record of hiring and retaining high-performing employees
          as well as creating family environment that encourages
          cross-functional collaboration. Regularly acknowledged as top
          performing branch manager based on sales, customer retention, and
          financial performance metrics. Innovative leader with reputation for
          implementing morale-boosting employee development programs to drive
          performance and support tenure. Earned promotion to leadership role
          after demonstrating exceptional sales record.
        </p>
        <br />
        <p>“You miss 100% of the shots you don’t take. — Wayne Gretzky” </p>
        <p>— Michael Scott </p>

        <div className="about-icon">
          {" "}
          <FontAwesomeIcon
            icon={faLinkedin}
            className="icon-linkedin"
            size="3x"
          />
          <FontAwesomeIcon icon={faGithub} className="icon-github" size="3x" />
        </div>
      </div>
    );
  }
}
