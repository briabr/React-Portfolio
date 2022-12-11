import React from 'react'

function Contact() {
  return (
    <section id="contactMe" className="contact">
      <div className="flex-row">
        <h2 className="section-title secondary-border">Contact Me</h2>
      </div>

      <div className="contactInfo">
        <div>
          <p>Here are my contact info:</p>
          <address>
          New York, NY <br />
            Phone: <a href="tel:646.374.9692">646</a>
            <br />
            Email:{" "}
            <a href="mailto://filalibria@yahoo.fr">
              filalibria@yahoo.fr
            </a>
          </address>
        </div>
      </div>
    </section>
  );
}

export default Contact;




// import React from 'react'

// const Contact = () => {
//   return (
//     <main id="contact">
//       <h1 class="lg-heading">Contact</h1>
//       <section class="boxes">
//         <div><span class="text-secondary">Email:</span> bria.filali@gmail.com</div>
//         <div><span class="text-secondary">Phone:</span> </div>
//         <div><span class="text-secondary">Address:</span> 784 Columbus Ave aprt 11S,10025, NY</div>
//       </section>
//     </main>
//   )
// }

// export default Contact