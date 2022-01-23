import React from "react";
import "./Skills.css";
function Skills() {
  return (
    <div className="skills" id="skills">
      <h1 className="skills_heading">Skills</h1>
      <div className="skills_parts">
        <h3>Front-End</h3>
        <div className="bar_container">
          <div className="bar" id="front_end_bar"></div>
        </div>
      </div>

      <div className="skills_parts">
        <h3>Back-End</h3>
        <div className="bar_container">
          <div className="bar" id="back_end_bar"></div>
        </div>
      </div>

      <div className="skills_parts">
        <h3>Android Development</h3>
        <div className="bar_container">
          <div className="bar" id="Android_dev"></div>
        </div>
      </div>

      <div className="skills_parts">
        <h3>Data Structure & algorithm</h3>
        <div className="bar_container">
          <div className="bar" id="DSA_bar"></div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
