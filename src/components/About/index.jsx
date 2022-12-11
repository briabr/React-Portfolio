import React from "react";
import profileImage from "../../assets/images/Headshot.jpg";
function About() {
  return (
    <section id="about-me" className="my-5 intro">
      <div class="flex-row">
        <h1 id="about" className="section-title primary-border">
          About Me
        </h1>
      </div>
      <div className="flex-row">
        <div class="intro-info">
          <div class="intro-img">
            <img src={profileImage} style={{ width: "50%" }} alt="profile" />
          </div>
          <p>
            Hello, my name is Bria Filali. I am currently living in New York City.
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