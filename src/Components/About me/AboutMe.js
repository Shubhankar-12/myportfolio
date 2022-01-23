import React from "react";
import "./AboutMe.css";
import myImg from "./img.png";
function AboutMe() {
  return (
    <div className="aboutSec">
      <div className="aboutSec_section">
        <div className="aboutSec_Sub1">
          <button className="Sub1_ele noValbtn">Learner</button>
          <h1 className="Sub1_ele">
            Talk is cheap.
            <br />
            Show me the code
          </h1>
          <p className="Sub1_ele">
            Trying to Learn new skills like Full-Stack Web Dev, Android Dev,
            <br /> DSA etc.
          </p>
          <a className="Sub1_ele letsChat" href="mailto:shubhankar719.com ">
            LET'S CHAT !
          </a>
        </div>

        <div className="aboutSec_Sub2">
          <div>
            <span className="Sub2_num">2</span> nd year{" "}
          </div>
          <div>
            <span className="Sub2_num">2</span> Web-Dev{" "}
            <span className="Sub2_num">1</span> Android-Dev
          </div>
        </div>
      </div>
      <div className="aboutSec_section ImgSec">
        <img src={myImg} className="myImg" />
      </div>
    </div>
  );
}

export default AboutMe;
