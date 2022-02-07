import "./App.css";

import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Profile from "./components/Profile";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import Skills from "./pages/Skills";
import Interests from "./pages/Interests";
import Awards from "./pages/Awards";

import React, { Component } from "react";

export class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Profile />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/interests" element={<Interests />} />
          <Route path="/awards" element={<Awards />} />
        </Routes>
      </div>
    );
  }
}

export default App;
