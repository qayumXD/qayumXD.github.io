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
                <a href="#" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="#" target="_blank" rel="noreferrer"><h2>Scalable POS System</h2></a>
                <p>A comprehensive Point of Sale system built with Node.js and React, featuring real-time inventory management, payment processing, and multi-location support. Designed for scalability with enterprise-grade data integrity and seamless hardware integration.</p>
            </div>
            <div className="project">
                <a href="#" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="#" target="_blank" rel="noreferrer"><h2>Library Management System</h2></a>
                <p>Full-featured library management application developed with Laravel, featuring book cataloging, member management, borrowing/return tracking, and automated fine calculations. Includes admin dashboard and comprehensive reporting system.</p>
            </div>
            <div className="project">
                <a href="#" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="#" target="_blank" rel="noreferrer"><h2>Photo Album Web App</h2></a>
                <p>Responsive photo management system with features like drag-and-drop uploads, album organization, image optimization, and secure sharing. Built with modern web technologies for seamless user experience across all devices.</p>
            </div>
            <div className="project">
                <a href="#" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="#" target="_blank" rel="noreferrer"><h2>Daraz to Shopify Migration Bot</h2></a>
                <p>Intelligent automation bot using Selenium and Playwright that extracts product data from Daraz marketplace and seamlessly migrates it to Shopify stores. Features include data validation, image processing, and bulk product management.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;