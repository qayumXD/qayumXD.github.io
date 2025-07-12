import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
// import mock05 from '../assets/images/mock05.png';
// import mock06 from '../assets/images/mock06.png';
// import mock07 from '../assets/images/mock07.png';
// import mock08 from '../assets/images/mock08.png';
// import mock09 from '../assets/images/mock09.png';
// import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
           
            <div className="project">
                <a href="#" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="#" target="_blank" rel="noreferrer"><h2>AutoScrape Deals Bot</h2></a>
                <p>A Python-based bot that automatically scrapes top tech deals from e-commerce platforms like Amazon, Daraz, or Newegg using BeautifulSoup or Playwright.</p>
            </div>
            <div className="project">
                <a href="#" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="#" target="_blank" rel="noreferrer"><h2>Flashcard & Quiz Interface — Fiverr Project</h2></a>
                <p>Built with React and Vite, this app dynamically processes uploaded JSON files to generate flashcards or quiz formats in real time. Features include file validation, smart routing, and interactive UI rendering based on content type.</p>
            </div>
            <div className="project">
                <a href="#" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="#" target="_blank" rel="noreferrer"><h2>Space Mission & Satellite Tracking System</h2></a>
                <p>An AI-powered academic project built with React 18, Three.js, and FastAPI, featuring 3D visualizations, interactive charts, and real-time satellite tracking. It integrates Oracle DB and ML models for predictive analytics and mission control.</p>
            </div>
            <div className="project">
                <a href="#" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="#" target="_blank" rel="noreferrer"><h2>E-commerce Website</h2></a>
                <p>Built with HTML, CSS, Bootstrap, PHP, JavaScript, and MySQL, this full-featured platform allows users to browse products by category, register/login securely, manage their cart, and complete purchases — delivering a seamless shopping experience.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;