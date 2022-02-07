import React, { Component } from "react";
import HeaderBackground from "./HeaderBackground";
import Navbar from "./Navbar";

export default class Header extends Component {
  render() {
    return (
      <header>
        <HeaderBackground />

        <Navbar />
      </header>
    );
  }
}
