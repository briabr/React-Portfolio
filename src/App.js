// import "./App.css";
// import Header from'./components/Header'
// import Footer from'./components/Footer'
// export default function App() {
//   return(
//     <>
//     <Header/>
//     <Footer/>
//     </>
//   );
// }
import React from 'react';
// import Navbar from './components/Navigation';
import Header from './components/Header';
// import About from './components/About';
import Project from './components/project/Project';
// import Contact from './components/Contact';
import Footer from './components/Footer'
import Experience from './components/workExperience'
import About from './components/About'
import Contact from './components/Contact';

// In our main App component, we are rendering only single instances of Header and Navbar and several instances of Card
function App() {
  return (
    <div>

      <Header />
      <About/ >
      <Project />
      <Experience />
      < Contact />
      <Footer />
   

    </div>
  );
}

export default App;













// import { useState } from 'react'
// import Header from './components/Header'
// import Home from './components/Home'
// import About from './components/About'
// import Work from './components/workExperience'
// import Contact from './components/Contact'
// import Footer from './components/Footer'
// import backgroundImage from './assets/images/Headshot.jpg'


// function App() {
//   const backgroundStyle = {
//     background: `url(${backgroundImage})`,
//     backgroundAttachment: 'fixed',
//     backgroundSize: 'cover',
//   }

//   const [currentPage, setCurrentPage] = useState('Home');
//   const [navDisplay,setNavDisplay] = useState(false)

//   const renderPage = () => {
//     if (currentPage === 'Home') return <Home />;
//     else if (currentPage === 'About') return <About />;
//     else if (currentPage === 'Work') return <Work />;
//     else return <Contact />;
//   }

//   const handlePageChange = (page) => {
//     setNavDisplay(false);
//     setCurrentPage(page);
//   };

//   return (
//     <div style={backgroundStyle}>
//       <Header 
//         currentPage={currentPage} 
//         handlePageChange={handlePageChange} 
//         navDisplay={navDisplay} 
//         setNavDisplay={setNavDisplay} />

//       {renderPage()}

//       <Footer />
//     </div>
//   )
// }

// export default App


// import React, { useState } from "react";
// import Header from "../src/components/Header";
// // import About from "../src/components/About";
// // import Contact from "../src/components/Contact";
// // import Portfolio from "../src/components/Portfolio";
// // import Resume from "../src/components/Resume";
// import Footer from "../src/components/Footer";
// import { Helmet } from "react-helmet";
// import "./App.css";

// function App() {
//   const [currentTab, handleTabChange] = useState("about");

//   // This method is checking to see what the value of `currentTab` is. Depending on the value of currentPage, we return the corresponding component to render.
//   // const renderTab = () => {
//   //   // if (currentTab === "About") {
//   //   //   return <About />;
//   //   // }
//   //   if (currentTab === "Contact") {
//   //     return <Contact />;
//   //   }
//   //   // if (currentTab === "Portfolio") {
//   //   //   return <Portfolio />;
//   //   // }
//   //   // if (currentTab === "Resume") {
//   //   //   return <Resume />;
//   //   // }
//   //   return <About />;
//   // };

//   return (
//     <>
//       <Helmet>
//         <title>Bria El Filali | {currentTab} </title>
//       </Helmet>
//       ;
//       <Header
//         currentTab={currentTab}
//         handleTabChange={handleTabChange}
//       ></Header>
//       {/* <main>{renderTab()}</main> */}
//       <Footer></Footer>
//     </>
//   );
// }

// export default App;





