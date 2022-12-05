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



// In our main App component, we are rendering only single instances of Header and Navbar and several instances of Card
function App() {
  return (
    <div>
      <Header />
\     <Project />
      <Footer />
    </div>
  );
}

export default App;