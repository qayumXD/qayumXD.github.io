import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import { faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React",
    "Vite",
    "JavaScript",
    "HTML5",
    "CSS3",
    "JSON",
    "MySQL",
    "SQL",
    "ER Diagrams"
];

const labelsSecond = [
    "Stella Architect",
    "CLDs",
    "System Reports",
    "Hardware Fixes",
    "BIOS Resets",
    "WiFi Security"
];

const labelsThird = [
    "BeautifulSoup",
    "Selenium",
    "requests",
    "pandas",
    "ShopifyAPI",
    "pytest",
    "dotenv",
    "openpyxl"
];

function Expertise() {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h1>Expertise</h1>
                <div className="skills-grid">

                    <div className="skill">
                        <FontAwesomeIcon icon={faReact} size="3x" />
                        <h3>Responsive Web Development</h3>
                        <p>I specialize in building fast, responsive web apps using React and Vite. My development approach blends technical precision with clean design and scalable code architecture.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsFirst.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faProjectDiagram} size="3x" />
                        <h3>Systems Modeling & Tech Support</h3>
                        <p>I use Stella Architect to model complex systems and generate clear, actionable insights. Additionally, I provide hands-on technical troubleshooting — from hardware repair to network diagnostics.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Core Tools:</span>
                            {labelsSecond.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faPython} size="3x" />
                        <h3>Bot Automation & Data Extraction</h3>
                        <p>I build scalable bots for web scraping, form fulfillment, and Shopify automation. My solutions are modular, well-tested, and production-ready — built to save time and boost efficiency.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Libraries & Tools:</span>
                            {labelsThird.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Expertise;
