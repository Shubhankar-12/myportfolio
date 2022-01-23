import "./Navbar.css";
import React, { useState } from "react";
import list from "./list.svg";
import { Link } from 'react-scroll'

function Navbar() {
  const [classToggle, setclassToggle] = useState(true);
  const [classes_list, setclasses_list] = useState("Navbar-elements");
  const Toggleswitch = () => {
    classToggle ? setclassToggle(false) : setclassToggle(true);
    if (classToggle) setclasses_list("Navbar-elements show_elem");
    else setclasses_list("Navbar-elements");
  };
  const listClickHandle = () => {
    setclassToggle(true)
    Toggleswitch()
  };
  return (

    <nav className="Navbar">
      <div className="home_btn">
        <div>
          <span className="home_btn_dark">Shubh </span>
          <span>Shubhankar</span>
        </div>
        <div className="HamButton">
          <img src={list} className="btn-drop" onClick={Toggleswitch} />
        </div>
      </div>
      <ul className={classes_list}>
        <li className="Navbar-elements__ul">
          <Link to="about" smooth={true} duration={1000} onClick={listClickHandle}>About Me</Link>
        </li>
        <li className="Navbar-elements__ul">
          <Link to="skills" smooth={true} duration={1500} onClick={listClickHandle}>Skills</Link>
        </li>
        <li className="Navbar-elements__ul">
          <Link to="project" smooth={true} duration={1800} onClick={listClickHandle}>Projects</Link>
        </li>
        <li className="Navbar-elements__ul"  >
          <Link to="contact" smooth={true} duration={2000} onClick={listClickHandle}>Contact me</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
