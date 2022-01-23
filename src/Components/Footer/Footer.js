import "./Footer.css";
import React from "react";
import twitter from "./icons/Twitter.png";
import Discord from "./icons/Discord.png";
import Github from "./icons/Github.png";
import Instagram from "./icons/Instagram.png";
import LinkedIn from "./icons/LinkedIn.png";
function Footer() {
  const twiterClick = () => window.open("https://twitter.com/____Shubh____");
  const DiscordClick = () => window.open("https://discord.gg/BwhtX8zq");
  const InstaClick = () =>
    window.open("https://www.instagram.com/shubh_shubhankar/");
  const LnkdClick = () =>
    window.open("https://www.linkedin.com/in/shubh-shubhankar-55a312a7/");
  const gitClick = () => window.open("https://github.com/Shubhankar-12");

  return (
    <div className="footer">
      <div className="name_footer">
        <span className="home_btn_dark">Shubh </span>
        <span>Shubhankar</span>
      </div>
      <div className="copyright">No Copyright.</div>
      <div className="link-icons">
        <img src={twitter} alt="" onClick={twiterClick} />
        <img src={Discord} alt="" onClick={DiscordClick} />
        <img src={Instagram} alt="" onClick={InstaClick} />
        <img src={LinkedIn} alt="" onClick={LnkdClick} />
        <img src={Github} alt="" onClick={gitClick} />
      </div>
    </div>
  );
}

export default Footer;
