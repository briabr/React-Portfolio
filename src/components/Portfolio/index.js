import React from "react";
import astrologica from "../../assets/images/astrologica-ss.png";
import safeMed from "../../assets/images/safemed.png";

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
                This application is here to help transform technology in the
                healthcare field. safeMed is a unqiue Electronic Medication
                Admin Record database application that will help increase the
                productivty and performance of healthcare workers such as
                Nurses, Medical Doctors, and Pharmacist while working safely to
                manage patient medications. Our application provides a safe and
                secure collaboration between interdisciplinary teams within
                facilities eg. Hospitals, Nursing Homes, and Outpatient. Some of
                the technologies used to build safeMed include: Javascript,
                Handlebars, Node.js, Express, and more. Our goal is to continue
                to advance the features in technology in our application through
                updates in order to create the best user experience. safeMed is
                the future of eMAR! Our goal is help medical professionals spend
                more time with patients and less time dealing with outdated
                technology.{" "}
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
                  style={{ width: "80%" }}
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
                display accurate information relevant to them. We learned a lot
                from this project particularly: writting functions, using APIs
                data, using CSS framework other than bootstrap, html and most
                importantly working with branches in GitHub.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
