import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import myImg from '../assets/images/myImg.jpeg';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={myImg} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/ahmadfaraz007" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/ahmad-faraz-a47ba4334/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Ahmad Faraz</h1>
          <p>Web Developer • Bot Automation Specialist • System Modeler</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/ahmadfaraz007" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/ahmad-faraz-a47ba4334/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;