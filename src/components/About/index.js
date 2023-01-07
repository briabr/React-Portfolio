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