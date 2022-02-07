import React, { Component } from "react";
import logo from "../images/dunder-logo.png";

export default class HeaderBackground extends Component {
  render() {
    return (
      <div className="header-background">
        <img src={logo} alt="" />
      </div>
    );
  }
}
