import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2024 – Present"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Freelance Developer & System Consultant</h3>
            <h4 className="vertical-timeline-element-subtitle">Vehari District, Punjab</h4>
            <p>
              Providing comprehensive tech solutions to local businesses including POS systems, web development, 
              bot automation, and Stella system dynamics modeling. Specializing in business process optimization 
              and digital transformation for small to medium enterprises.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023 – 2024"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">POS Data Integrity Specialist</h3>
            <h4 className="vertical-timeline-element-subtitle">Mehfoos Hardware, Vehari District</h4>
            <p>
              Ensured data integrity and system reliability for hardware retail POS operations. 
              Implemented data validation protocols and resolved system inconsistencies to maintain 
              accurate inventory and sales records.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022 – 2023"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Assistant POS Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Local POS Developer, Vehari District</h4>
            <p>
              Worked closely with an experienced POS developer to learn system architecture, 
              implementation strategies, and client requirements. Gained hands-on experience 
              in POS customization and business-specific integrations.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">POS Integration Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Rehan Seeds and Co, Vehari District</h4>
            <p>
              Developed and implemented seamless POS integration solutions for agricultural business operations. 
              Created custom modules for inventory management and sales tracking specific to the seeds industry.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Web Development Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">NesterSky, Vehari</h4>
            <p>
              Hands-on experience in building frontend and backend web apps within a professional team setting.
              Learned collaborative development practices and gained exposure to real-world project workflows.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Junior Developer (Freelance Projects)</h3>
            <h4 className="vertical-timeline-element-subtitle">Vehari District, Punjab</h4>
            <p>
              Worked on small freelance client projects using React and basic backend logic for portfolio growth.
              Built foundational skills in client communication and project delivery.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Pre–2021"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Career Foundations & Learning</h3>
            <h4 className="vertical-timeline-element-subtitle">Vehari District, Punjab</h4>
            <p>
              Explored tech fundamentals, honed problem-solving skills, and began freelance experimentation 
              with frameworks like React. Built the foundation for specialized POS and automation expertise.
            </p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;