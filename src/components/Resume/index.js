import React from "react";
import { MdOutlineFoundation } from "react-icons/md";
import { GrTechnology } from "react-icons/gr";
import { GrPerformance } from "react-icons/gr";

function Resume() {
  return (
    <div>
      <section id="intro-section">
        <div className="flex-row">
          <p>These are the list of my Web Development Proficiencies!</p>
        </div>
      </section>
      <section id="homepage" className="tech-learnt">
        <div className="article column1">
          <p className="column-title">Front-End Technologies</p>
          <p className="column-text">
            <ul>
              <li className="logo">
                <MdOutlineFoundation />
              </li>
              <li>HTML5</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>APIs</li>
              <li>Bootstrap</li>
              <li>GIT</li>
            </ul>
          </p>
        </div>

        <div className="article column2">
          <p className="column-title">Back-End Technologies</p>
          <p className="column-text">
            <ul>
              <li className="logo">
                <GrTechnology />
              </li>
              <li>Node.Js</li>
              <li>Jest</li>
              <li>Express.js</li>
              <li>MySQL</li>
              <li>Sequelize</li>
              <li>Object-Relational Mapping(ORM)</li>
              <li>Model-View-Controller (MVC)</li>
            </ul>
          </p>
        </div>
        <div className="article column3">
          <p className="column-title">Performance Technologies</p>
          <p className="column-text">
            <ul>
              <li className="logo">
                <GrPerformance />
              </li>
              <li>NoSQL</li>
              <li>Progressive Web Applications (PWA)</li>
              <li>MongoDB</li>
              <li>Mongoose</li>
              <li>GraphQL</li>
              <li>React</li>
              <li>MERN</li>
              <li>State</li>
            </ul>
          </p>
        </div>
      </section>
    </div>
  );
}

export default Resume;
