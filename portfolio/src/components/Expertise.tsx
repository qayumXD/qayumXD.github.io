import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faLaravel, faPython, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faCashRegister, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React",
    "Node.js",
    "Laravel",
    "JavaScript",
    "HTML5",
    "CSS3",
    "MySQL",
    "PostgreSQL",
    "Payment Gateway APIs",
    "RESTful APIs"
];

const labelsSecond = [
    "POS Integration",
    "Data Integrity",
    "Enterprise Systems",
    "Business Process Optimization",
    "Real-time Processing",
    "Multi-platform Support",
    "Hardware Integration"
];

const labelsThird = [
    "Selenium",
    "Playwright",
    "BeautifulSoup",
    "Shopify API",
    "Daraz Integration",
    "Form Automation",
    "E-commerce Migration",
    "Cross-platform Bots"
];

const labelsFourth = [
    "Stella Architect",
    "System Dynamics",
    "Business Modeling",
    "Process Simulation",
    "CLDs",
    "System Reports",
    "Performance Analysis"
];

export default function Expertise() {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h1>Expertise</h1>
                <div className="skills-grid">

                    <div className="skill">
                        <FontAwesomeIcon icon={faReact} size="3x" />
                        <h3>Full-Stack Web Development</h3>
                        <p>I build scalable web applications using modern technologies. From photo albums to library management systems, I deliver complete solutions with clean architecture and responsive design.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsFirst.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faCashRegister} size="3x" />
                        <h3>POS Systems & Enterprise Solutions</h3>
                        <p>With 3+ years of specialized experience, I develop and integrate Point of Sale systems for businesses. From seamless integrations to data integrity solutions, I ensure reliable, scalable POS architecture.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Specialization:</span>
                            {labelsSecond.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faPython} size="3x" />
                        <h3>Bot Automation & E-commerce Integration</h3>
                        <p>I create intelligent automation solutions for business processes. From Daraz to Shopify migrations to form automation, my bots are production-ready and designed to save time and boost efficiency.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Automation Tools:</span>
                            {labelsThird.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faProjectDiagram} size="3x" />
                        <h3>System Modeling & Business Analysis</h3>
                        <p>I use Stella system dynamics modeling to analyze and optimize business processes. My models provide clear insights for decision-making and help businesses understand complex system behaviors.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Modeling Tools:</span>
                            {labelsFourth.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}