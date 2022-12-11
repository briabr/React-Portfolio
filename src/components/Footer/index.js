import React from "react";
import { VscGithubInverted } from "react-icons/vsc";

function Footer() {
  return (
    <footer>
      <h2>GitHub©</h2>
      <p>
        <ul>
          <a href="https://github.com/briabr">
            <li className="logo">
              <VscGithubInverted />
            </li>
          </a>
        </ul>
      </p>
    </footer>
  );
}

export default Footer;




// import React from 'react';

// function Footer() {   
//     return (
//     <footer className="footer bg-dark fixed-bottom">
//         <a href="https://github.com/briabr"><img src="https://img.icons8.com/color/48/000000/github--v1.png" alt="Github" className="icon"/></a>
//     </footer>
//     )
// }

// export default Footer;