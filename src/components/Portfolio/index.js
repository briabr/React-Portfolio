import React from "react";
import astrologica from "../../assets/images/astrologica-ss.png";
import safeMed from "../../assets/images/safemed.png";
import travelX from "../../assets/images/TravelX.png"

function Portfolio() {
  return (
    <div>
      <section id="work" className="project">
        <div className="flex-row">
          <h2 className="section-title secondary-border">Work</h2>
        </div>

        <div className="project">
          <div className="project-info">
            <div className="project-img">
              <a href="https://github.com/rsenecal/Project2-safeMed.git">
                {" "}
                <img
                  src={safeMed}
                  className="my-2"
                  style={{ width: "80%" }}
                  alt="safeMed"
                />
              </a>
              <p>This is the link to deployed application:</p>
              <p> deployedUrl: </p>
              <a href="https://project2-safe-med.herokuapp.com/"> </a>
            </div>
            <div className="project-text">
              <h4>safeMed</h4>
              <p>
                This application was created to help transform technology in the
                healthcare field. safeMed is a unqiue Electronic Medication
                Admin Record database application that will help increase the
                productivty and performance of healthcare workers such as
                Nurses, Medical Doctors, and Pharmacist while working safely to
                manage patient medications. The application provides a safe and
                secure collaboration between interdisciplinary teams within
                facilities eg. Hospitals, Nursing Homes, and Outpatient. Some of
                the technologies used to build safeMed include: Javascript,
                Handlebars, Node.js, Express, and more. Our goal is to continue
                to advance the features in technology in our application through
                updates in order to create the best user experience.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="project">
          <div className="project-info">
            <div className="project-img">
              <a href="https://cwyan2483.github.io/astrologica/">
                {" "}
                <img
                  src={astrologica}
                  className="my-2"
                  style={{ width: "60%" }}
                  alt="Astrologica"
                />
              </a>
            </div>
            <div className="project-text">
              <h4>Astrologica</h4>
              <p>
                The users want an application that would help them view events
                happening around them such as celestial movements. The
                application will help the the user narrow down the astrological
                events to show the ones that are closest to them. The
                application will also account for users current whereabouts to
                display accurate information relevant to them.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="project">
          <div className="project-info">
            <div className="project-img">
              <a href="https://github.com/inidhi99/travelX">
                {" "}
                <img
                  src={travelX}
                  className="my-2"
                  style={{ width: "60%" }}
                  alt="travelX"
                />
              </a>
              <p>This is the link to deployed application:</p>
              <p> deployedUrl: </p>
              <a href="https://nameless-falls-66947.herokuapp.com/"> </a>
            </div>
            <div className="project-text">
              <h4>TravelX</h4>
              <p>
                TravelX was created to assist the user with a busy lifestyle posts and keep
                track of their trips whether it's a vacation, a business trip,
                or a quick weekend getaway. the goal was to provide a one-stop
                shop for users to meet and experience trips together, possibly
                making a plan for a future trip. The application also provides a
                user-to-user sharing experience within the app via photos. The
                users can also leave reviews on their personal profiles for
                other customers. Other features of the application include
                suggestions for things to do in the area where a user is
                currently staying.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
