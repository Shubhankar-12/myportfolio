import React from "react";
import "./Projects.css";
import img from "./proj.png";
function Projects() {
  return (
    <div className="projects" id="project">
      <div className="projects_parts">
        <div className="my_work">
          <h1>My Works</h1>
          <p>Some of my projects and works</p>
        </div>

        <div className="project_card">
          <div className="card_top">
            <div className="card_name">ShopEzy</div>
            <div className="card_tags">
              <div className="tag">ElectronJS</div>
              <div className="tag">HTML</div>
              <div className="tag">SQLite</div>
            </div>
          </div>
          <div className="proj_img">
            <img src={img} alt="" />
          </div>
        </div>

        <div className="project_disc">
          <h1>All Projects</h1>
          <ul>
            <li>
              ShopEzy is ElectronJS based App to automate invoice generation.
            </li>
            <li>
              ShopEzy android is same as ShopEzy desktop version that is totally
              based on android development
            </li>
          </ul>
        </div>
      </div>

      <div className="projects_parts">
        <div className="project_card">
          <div className="card_top">
            <div className="card_name">ShopEzy Scan</div>
            <div className="card_tags">
              <div className="tag">Android Studio</div>
              <div className="tag">Java</div>
            </div>
          </div>
          <div className="proj_img">
            <img src={img} alt="" />
          </div>
        </div>
        <div className="project_card">
          <div className="card_top">
            <div className="card_name">ShopEzy Mobile</div>
            <div className="card_tags">
              <div className="tag">Android Studio</div>
              <div className="tag">Java</div>
            </div>
          </div>
          <div className="proj_img">
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
