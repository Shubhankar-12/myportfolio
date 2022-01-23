import "./App.css";
import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import AboutMe from "./Components/About me/AboutMe";
import ContactUs from "./Components/Contact us/Contact";
import Introduction from "./Components/Introduce/Intoduction";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="apps">
      <Navbar />
      <AboutMe />
      <Introduction />
      <Skills />
      <Projects />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
