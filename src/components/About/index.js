import React from "react";
import profileImage from "../../assets/images/Headshot.jpg";
function About() {
  return (
    <section id="aboutMe" className="intro">
      <div class="flex-row">
        <h1 id="about" className="section-title primary-border">
          About Me
        </h1>
      </div>
      <div className="flex-row">
        <div class="introInfo">
          <div class="introImg">
            <img src={profileImage} style={{ width: "50%" }} alt="profile" />
          </div>
          <p>
          Full Stack Web and Fintech Developer with a lifelong dedication to learning. Excellent team member, leader, and effective at combining creativity and problem-solving to develop user-friendly applications. 
          </p>
          <p>
          <li>Front-End: HTML5, CSS, Bootstrap, JavaScript, jQuery, React, version control/Git,responsive design</li>
          <li>Back-End: Node.js, Express.js, MySQL, NoSQL, Sequelize ORM, MongoDB</li> 
          <li>Concepts: APIs, REST, MVC, JSON</li>
          <li>Tools: Git, Github, GitLab, Heroku, Pandas, Jupyter, VS Code, Excel, R programming, Minitab, Eviews, and Python</li>
          </p>
        </div>
      </div>
    </section>
  );
}

/* <menu id="skills">
        <div class="skills-title">
          <h1>Skills</h1>
        </div>
        <img class="html" src="./assets/images/skills-images/html5.png" alt="HTML5">
        <img class="css" src="./assets/images/skills-images/css3.png" alt="CSS3">
        <img class="JavaScript" src="./assets/images/skills-images/JS.png" alt="JavaScript">
        <img class="jQuery" src="./assets/images/skills-images/jQuery.png" alt="jQuery">
        <img class="sass" src="./assets/images/skills-images/sass.png" alt="SASS">
        <img class="bootstrap" src="./assets/images/skills-images/bootstrap.png" alt="Bootstrap">
        <img class="nodeJS" src="./assets/images/skills-images/nodeJS.png" alt="NodeJS">
        <img class="expressJS" src="./assets/images/skills-images/express.png" alt="ExpressJS">
        <img class="MySQL" src="./assets/images/skills-images/MySQL.jpg" alt="MySQL">
        <img class="mongodb" src="./assets/images/skills-images/mongodb.png" alt="mongodb">
        <img class="React" src="./assets/images/skills-images/React.png" alt="React">
        <img class="npm" src="./assets/images/skills-images/npm_logo.png" alt="npm Logo">
        <img class="mern" src="./assets/images/skills-images/mern.jpg" alt="MERN">
        <img class="mern" src="./assets/images/skills-images/github-logo.png" alt="GitHub Logo">
        <img class="firebase" src="./assets/images/skills-images/firebase.png" alt="Firebase">
      </menu> */



// import React from 'react'
// // import portrait from '../../assets/images/Headshot.jpg'

// const About = () => {
//   return (
//     <main id="about">
//       <h1 className="lg-heading">About <span className="text-secondary">Me</span></h1>
//       <h2 className="sm-heading">About Me</h2>
//       <div className="about-info">
//         {/* <img src={portrait} alt="Bria Filali" className="bio-image" /> */}

//         <div className="bio">
//           <h3 className="text-secondary">BIO</h3>
//           <p>
//             Columbia Coding BootCamp Student. 
//           </p>
//         </div>
//        </div>
//     </main>
//   )
// }

export default About