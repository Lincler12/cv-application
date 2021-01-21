import logo from "./logo.svg";
import "./App.css";
import Name from "./Components/Name";
import Contact from "./Components/Contact";
import React, { Component } from "react";
import ProfSummary from "./Components/ProfSummary";
import Education from "./Components/Education";
import Experience from "./Components/Experience";
import Skills from "./Components/Skills";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personalInfo: {
        jobTitle: {
          value: "Job title",
          edit: false,
        },

        personalQualities: [
          {
            value: "",
            edit: false,
          },
        ],
      },
    };
  }
  handleOnBlur(e) {}
  render() {
    const { personalInfo } = this.state;
    return (
      <div id="wrap-content">
        <div id="top-wrapper">
          <Name />
          <Contact />
        </div>
        <ProfSummary />
        <Education />
        <Experience />
        <Skills />
      </div>
    );
  }
}

export default App;
