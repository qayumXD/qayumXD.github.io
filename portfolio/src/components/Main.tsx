import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import myImg from '../assets/images/myImg.png';

function Main() {
  React.useEffect(() => {
    document.title = "Abdul Qayyoum";
  }, []);

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={myImg} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/qayumxd" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/abdul-qayyoum-725306246/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Abdul Qayyoum</h1>
          <p>Web Developer • Bot Automation Specialist • System Modeler</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/qayumxd" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/abdul-qayyoum-725306246/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;