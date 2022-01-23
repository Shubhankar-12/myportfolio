import "./Introduction.css";
import React from "react";
import frontend from "./frontend.svg";
import android from "./android.svg";
import comp from "./comp.svg";

function Introduction() {
  return (
    <div className="intro_sec">
      <div className="intro_Subsec">
        <div className="intro_skills">
          <div className="intro_skills_top">
            <h3>Front-End</h3>
            <img src={frontend} alt="" />
          </div>
          <p>Did Some Great Front - End Projects</p>
          <a href="https://github.com/Shubhankar-12">Have a Look</a>
        </div>

        <div className="intro_skills">
          <div className="intro_skills_top">
            <h3>Android</h3>
            <img src={android} alt="" />
          </div>
          <p>Did few android Projects also</p>
          <a href="https://github.com/Shubhankar-12">Have a Look</a>
        </div>

        <div className="intro_skills">
          <div className="intro_skills_top">
            <h3>Competative</h3>
            <img src={comp} alt="" />
          </div>
          <p>Tried CP also.</p>
          <a href="https://www.codechef.com/users/shubhankar_101">CodeChef</a>
        </div>
      </div>

      <div className="intro_Subsec" id="about">
        <h1 className="intro_heading">
          Hello there!
          <br /> I’m Shubh Shubhankar
        </h1>
        <h3 className="intro_subheading">
          Just a student who trying to learn New things.
        </h3>
        <p className="intro_main">
          I am 2nd year undergraduate student working on different skills to stand
          out. I learn’t different languages like C, C++, Java. Currently
          studying DSA and also working on my Web development skills learning
          ReactJS, NodeJS, ElectronJs. I also started doing Competetive
          Programing in CodeChef and Hacerrank.I had participated in many
          hackethons and also got 2nd ranked in one of them.I am quick learner
          and always keen to learn new things. I am also good at team work and
          love to collabrate with others in same field in order to
          create/achieve new and exiting things.Other than studies I love to
          sketch, listen songs and watch movies and series.
        </p>
      </div>
    </div>
  );
}

export default Introduction;
