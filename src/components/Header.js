import React from "react";
import Nav from "../components/Navigation";

function Header(props) {
  const { currentTab, handleTabChange } = props;

  return (
    <div>
      <section>
        <header className="flex-row px-1">
          <div>
            <h1>Bria Filali Portfolio</h1>
          </div>
          <div>
            <Nav
              currentTab={currentTab}
              handleTabChange={handleTabChange}
            ></Nav>
          </div>
        </header>
      </section>
      <section class="hero">
        <div class="hero-cta">
          <h2>Welcome</h2>
          <p>
            Welcome to Bria Filali's portfolio page built with react.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Header;



// import React from "react";
// import Navbar from "./Navigation";
// // import "../styles/Header";

// export default function Header() {
//   return (
//     <header>
//       <div>
//         <h2>Bria Filali Portfolio</h2>
//         <Navbar></Navbar>
//       </div>
//     </header>
//   );
// }

// import React from "react";
// import Nav from "../components/Navigation";

// function Header(props) {
//   const { currentTab, handleTabChange } = props;

//   return (
//     <div>
//       <section>
//         <header className="flex-row px-1">
//           <div>
//             <h1>Bria Filali Portfolio</h1>
//           </div>
//           <div>
//             <Nav
//               currentTab={currentTab}
//               handleTabChange={handleTabChange}
//             ></Nav>
//           </div>
//         </header>
//       </section>
//       <section class="hero">
//         <div class="hero-cta">
//           {/* <img
//             src={coverImage}
//             className="my-2"
//             style={{ width: "100%" }}
//             alt="cover"
//           /> */}

//           <h2>Welcome</h2>
//           <p>
//             Welcome to Bria Filali's portfolio page built with react.
//           </p>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Header;
