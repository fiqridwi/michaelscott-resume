import React, { Component } from "react";

export default class Interests extends Component {
  render() {
    return (
      <div className="section">
        <h1>Interest</h1>
        <h3>Film Making</h3>
        <ul className="experience-marbot">
          <li>“Threat Level:Midnight” (short movie)</li>
          <li>“Limitless Paper, in a Paperless World” (ad)</li>
          <li>“The Electric CIty” (music video)</li>
        </ul>
        <h3 className="experience-marbot">Ice Hockey</h3>
        <h3>Acting</h3>
        <ul>
          <li>“Threat Level:Midnight” as Michal Scarn</li>
          <li>“Fundle Bundle” as Kid Star</li>
        </ul>
      </div>
    );
  }
}
