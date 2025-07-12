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

          {/* Parsed from user input */}




          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022 – 2022"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">System Dynamics Modeler</h3>
            <h4 className="vertical-timeline-element-subtitle">Remote / Consulting</h4>
            <p>
              Creating dynamic simulations and CLDs using Stella Architect for academic and consulting clients.
              Detailed reporting and behavior analysis included.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021 – 2022"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Technical Problem-Solver</h3>
            <h4 className="vertical-timeline-element-subtitle">Hands-on</h4>
            <p>
              Experience in hardware troubleshooting, network security, and backend diagnostics.
              Explored bot development, asynchronous coding, and IDEs.
            </p>
          </VerticalTimelineElement>

          {/* Existing career entries remain unchanged below */}








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
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Junior Developer (Freelance Projects)</h3>
            <h4 className="vertical-timeline-element-subtitle">Multan</h4>
            <p>
              Worked on small freelance client projects using React and basic backend logic for portfolio growth.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Pre–2022"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Career Foundations & Growth</h3>
            <h4 className="vertical-timeline-element-subtitle">Vehari</h4>
            <p>
              Explored tech fundamentals, honed problem-solving skills, and began freelance experimentation with frameworks like React.
            </p>
          </VerticalTimelineElement>


        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
