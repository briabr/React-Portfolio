import React from "react";

function Nav(props) {
  const {
    currentTab,
    handleTabChange,

  } = props;
  return (

   
    <nav>
    <ul className="nav nav-tabs">
      <li className="nav-item">
          <a
            href="#about"
            onClick={() => handleTabChange('About')}
            // if the currentTab is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentTab === 'About' ? 'nav-link active' : 'nav-link'}
          >
            About
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#project"
            onClick={() => handleTabChange('Project')}
            // if the currentTab is `Portfolio`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentTab === 'Project' ? 'nav-link active' : 'nav-link'}
          >
            Project
          </a>
        </li>
        
        <li className="nav-item">
          <a
            href="#Experience"
            onClick={() => handleTabChange('Experience')}
            //if the currentTab is `Experience`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentTab === 'Experience' ? 'nav-link active' : 'nav-link'}
          >
            Work Experience
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contact"
            onClick={() => handleTabChange('Contact')}
            //if the currentTab is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentTab === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </a>
        </li>
    </ul>
    </nav>

  );
}

export default Nav;





// import React from "react";

// // We declare an object called styles that will contain a few objects for card and heading styles
// // Notice that each key lists CSS styles in camel case
// // const styles = {
// //   card: {
// //     margin: 20,
// //     background: '#e8eaf6',
// //   },
// //   heading: {
// //     background: '#9a74db',
// //     minHeight: 50,
// //     lineHeight: 3.5,
// //     fontSize: '1.2rem',
// //     color: 'white',
// //     padding: '0 20px',
// //   },
// // };

// // In Navbar, we can assign a style from an object by using curly braces
// function Navbar() {
//   return (
  
// 	<nav>
//           <ul>
//             <li>
//               <a href="#About me">About me</a>
//             </li>
//             <li>
//               <a href="#Work">Work</a>
//             </li>
//             <li>
//               <a href="#Contact me">Contact me</a>
//             </li>
//             <li>
//               <a href="Resume">Resume</a>
//             </li>
//           </ul>
//         </nav>
//   );
// }

// export default Navbar;


// import React from 'react'

// const Nav = ({ navDisplay, currentPage, handlePageChange, toggleNavDisplay}) => {

//   return (
//     <nav className={!navDisplay ? 'menu' : 'menu show'}>
//         <div className={!navDisplay ? 'menu-branding' : 'menu-branding show'}>
//           <div className="portrait"></div>
//         </div>
//         <ul className={!navDisplay ? 'menu-nav' : 'menu-nav show'}>
//           <li className={!navDisplay ? 'nav-item' : 'nav-item show'}>
//             <a href="#home" onClick={() => handlePageChange('Home')} className={currentPage === 'Home' ? 'nav-link current' : 'nav-link'}> Home </a>
//           </li>
//           <li className={!navDisplay ? 'nav-item' : 'nav-item show'}>
//             <a href="#about" className={currentPage === 'About' ? 'nav-link current' : 'nav-link'} onClick={() => handlePageChange('About')}> About Me </a>
//           </li>
//           <li className={!navDisplay ? 'nav-item' : 'nav-item show'}>
//             <a href="#work" className={currentPage === 'Work' ? 'nav-link current' : 'nav-link'} onClick={() => handlePageChange('Work')}> My Work </a>
//           </li>
//           <li className={!navDisplay ? 'nav-item' : 'nav-item show'}>
//             <a href="#contact" className={currentPage === 'Contact' ? 'nav-link current' : 'nav-link'} onClick={() => handlePageChange('Contact')}> Contact Me </a>
//           </li>
//         </ul>
//       </nav>
//   )
// }

// export default Nav


// import React from "react";

// // import React, { useEffect } from 'react';
// // import { capitalizeFirstLetter } from '../../utils/helpers';

// // Here we are using object destructuring assignment to pluck off our variables from the props object
// // We assign them to their own variable names
// function Nav(props) {
//   const {
//     currentTab,
//     handleTabChange,

//   } = props;

//     // useEffect(() => {
//     //   document.title = capitalizeFirstLetter(currentTab.name);
//     // }, [currentTab]);


//   return (

   
//     <nav>
//     <ul className="nav nav-tabs">
//       <li className="nav-item">
//           <a
//             href="#about"
//             onClick={() => handleTabChange('About')}
//             // Check to see if the currentTab is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
//             className={currentTab === 'About' ? 'nav-link active' : 'nav-link'}
//           >
//             About
//           </a>
//         </li>
//         <li className="nav-item">
//           <a
//             href="#project"
//             onClick={() => handleTabChange('Project')}
//             // Check to see if the currentTab is `Portfolio`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
//             className={currentTab === 'Project' ? 'nav-link active' : 'nav-link'}
//           >
//             Project
//           </a>
//         </li>
        
//         <li className="nav-item">
//           <a
//             href="#Experience"
//             onClick={() => handleTabChange('Experience')}
//             // Check to see if the currentTab is `Resume`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
//             className={currentTab === 'Experience' ? 'nav-link active' : 'nav-link'}
//           >
//             Work Experience
//           </a>
//         </li>
//         <li className="nav-item">
//           <a
//             href="#contact"
//             onClick={() => handleTabChange('Contact')}
//             // Check to see if the currentTab is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
//             className={currentTab === 'Contact' ? 'nav-link active' : 'nav-link'}
//           >
//             Contact
//           </a>
//         </li>
//     </ul>
//     </nav>

//   );
// }

// export default Nav;




