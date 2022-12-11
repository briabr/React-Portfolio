// import React from 'react'
import ProjectCard from '../projectCard'
import astrologica from '../../assets/images/astrologica-ss.png'
import safeMedImg from '../../assets/images/safemed.png'
// import teamProfileGeneratorImg from '../../assets/img/projects/team-profile-generator.png'

const Work = () => {
  const projects = [
    {
      name: 'Astrologica',
      image: astrologica,
      github: 'https://cwyan2483.github.io/astrologica/',
      deployed: false,
      deployedUrl: null
    },
    {
      name: 'safeMed',
      image: safeMedImg,
      github: 'https://github.com/rsenecal/Project2-safeMed.git',
      deployed: true,
      deployedUrl: 'https://project2-safe-med.herokuapp.com/'
    },
    // {
    //   name: 'Team Profile Generator',
    //   image: teamProfileGeneratorImg,
    //   github: 'https://github.com/jeffgrasso42/team-profile-generator.git',
    //   deployed: false,
    //   deployedUrl: null
    // }
  ]


  return (
    <main id="work">
      {/* <h1 className="lg-heading">My <span className="text-secondary">Work</span></h1>
      <h2 className="sm-heading">Check out some of my projects...</h2> */}
      <section className="projects">
        {projects.map((project, idx) => {
          return <ProjectCard 
            key={idx} 
            name={project.name}
            image={project.image}
            github={project.github}
            deployed={project.deployed}
            deployedUrl={project.deployedUrl} />
          })}
      </section>
    </main>
  )
}

export default Work

// import React from 'react'

// function Portfolio() {
//     return (
//       <div>
//         <section id="work" className="jobs">
//           <div className="flex-row">
//             <h2 className="section-title secondary-border">Work</h2>
//           </div>
  
//           <div className="job">
//             <div className="job-info">
//               <div className="job-img">
//                 <a href="https://cwyan2483.github.io/astrologica/">
//                   {" "}
//                   <img
//                     src={astrologica}
//                     className="my-2"
//                     style={{ width: "100%" }}
//                     alt="astrology"
//                   />
//                 </a>
//               </div>
//               <div className="job-text">
//                 <h4>Astrological events</h4>
//                 <p>
//                   A MERN application that lets the user log in and create an
//                   account. The user can receive daily affirmations. The user also
//                   has the ability to ask questions to receive an answer. The user
//                   also can receive a lucky number if they want. The user can
//                   donate money to the website if they want to.
//                 </p>
//               </div>
//             </div>
//           </div>
  
//           <div className="job">
//             <div className="job-info">
//               <div className="job-img">
//                 <a href="https://cwyan2483.github.io/astrologica/">
//                   {" "}
//                   <img
//                     src={flowerImage}
//                     className="my-2"
//                     style={{ width: "100%" }}
//                     alt="Sweet-Pea-Flowers"
//                   />
//                 </a>
//               </div>
//               <div className="job-text">
//                 <h4>Sweet Pea Flowers</h4>
//                 <p>
//                   A HTMl, CSS, and Javascript application that lets the user shop
//                   for their favorite flowers.The user can sign in as a guest or as
//                   a user to add items to their cart. The user can manage their
//                   cart by using local storage. The user can checkout and validate
//                   their credit card.{" "}
//                 </p>
//               </div>
//             </div>
//           </div>
  
//           <div className="job">
//             <div className="job-info">
//               <div className="job-img">
//                 <a href="https://lemming97.github.io/Twilight_Ristorante/">
//                   {" "}
//                   <img
//                     src={twilightImage}
//                     className="my-2"
//                     style={{ width: "100%" }}
//                     alt="Twilight_Ristorante"
//                   />
//                 </a>
//               </div>
//               <div className="job-text">
//                 <h4>Twilight Ristorante</h4>
//                 <p>
//                   A HTML and CSS application that lets the user explore a Sample
//                   Restaurant Design.{" "}
//                 </p>
//               </div>
//             </div>
//           </div>
  
//           <div className="job">
//             <div className="job-info">
//               <div className="job-img">
//                 <a href="https://nameless-mountain-77177.herokuapp.com/">
//                   {" "}
//                   <img
//                     src={noteTakerImage}
//                     className="my-2"
//                     style={{ width: "100%" }}
//                     alt="Note_Taker"
//                   />
//                 </a>
//               </div>
//               <div className="job-text">
//                 <h4>Note Taker</h4>
//                 <p>
//                   An application that provides the user the ability to add new
//                   notes, and to delete notes.{" "}
//                 </p>
//               </div>
//             </div>
//           </div>
  
//           <div className="job">
//             <div className="job-info">
//               <div className="job-img">
//                 <a href="https://lemming97.github.io/Weather_Dashboard/">
//                   {" "}
//                   <img
//                     src={weatherDashImage}
//                     className="my-2"
//                     style={{ width: "100%" }}
//                     alt="Weather_Dashboard"
//                   />
//                 </a>
//               </div>
//               <div className="job-text">
//                 <h4>Weather Dashboard</h4>
//                 <p>
//                   A website that allows the user see the weather outlook for
//                   multiple cities. The user can enter a city and see a 5-Day
//                   Forecast. The user can see the temperature, humidity levels,
//                   wind speed as well as the UV index.{" "}
//                 </p>
//               </div>
//             </div>
//           </div>
  
//           <div className="job">
//             <div className="job-info">
//               <div className="job-img">
//                 <a href="https://lemming97.github.io/Project_1/">
//                   {" "}
//                   <img
//                     src={summerPunchImage}
//                     className="my-2"
//                     style={{ width: "100%" }}
//                     alt="SummerPunch"
//                   />
//                 </a>
//               </div>
//               <div className="job-text">
//                 <h4>Summer Punch</h4>
//                 <p>
//                   A website which offers users to input a drink name to have the
//                   ingredients, measurements, and images display. The user can also
//                   have a cocktail generated. If the user is too young, the user
//                   will be redirected to another page.{" "}
//                 </p>
//               </div>
//             </div>
//           </div>
  
//           <div className="job">
//             <div className="job-info">
//               <div className="job-img">
//                 <a href="https://floating-island-17357.herokuapp.com/">
//                   {" "}
//                   <img
//                     src={homeBrewImage}
//                     className="my-2"
//                     style={{ width: "100%" }}
//                     alt="HomeBrew"
//                   />
//                 </a>
//               </div>
//               <div className="job-text">
//                 <h4>HomeBrew</h4>
//                 <p>
//                   A plant blog that allows the user to view seasonal gallery of
//                   plants after the user logs into their account. The user can also
//                   add comments to the blog once they are logged in as well as
//                   deleting their comments.{" "}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     );
//   }
  
//   export default Portfolio;