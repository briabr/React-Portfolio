import React from "react";
import Nav from "../Navigation ";

function Header(props) {
  const { currentTab, handleTabChange } = props;

  return (
    <div>
      <section>
        <header className="flex-row px-1">
          <div>
            <h1>Bria Filali's Portfolio</h1>
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
            Welcome to Bria's Filali portfolio page built with React. In this Homepage, 
            you can find couple of projects worked on during Columbia Full Stack Development program. 
          </p>
        </div>
      </section>
    </div>
  );
}

export default Header;


