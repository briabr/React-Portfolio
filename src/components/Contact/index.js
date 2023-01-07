import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function Contact() {
	const [formState, setFormState] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [errorMessage, setErrorMessage] = useState("");

	const { name, email, message } = formState;

	function handleChange(e) {
		if (e.target.name === "email") {
			const isValid = validateEmail(e.target.value);
			if (!isValid) {
				setErrorMessage("Your email is invalid.");
			} else {
				if (!e.target.value.length) {
					setErrorMessage(`${e.target.name} is required.`);
				} else {
					setErrorMessage("");
				}
			}
		}

		if (!errorMessage) {
			setFormState({ ...formState, [e.target.name]: e.target.value });
		}
	}

	function handleBlank(e) {
		if (e.target.name === "Name" || e.target.name === "Message") {
			if (!e.target.value.length) {
				setErrorMessage(`${e.target.name} is required.`);
			} else {
				setErrorMessage("");
			}
		}

		if (!errorMessage) {
			setFormState({ ...formState, [e.target.name]: e.target.value });
		}
	}

	return (
		<section>
			<div className="center">
				<h2 className="page-header">Contact Me</h2>
			</div>
			<div>
				<form id="contact-form">
					<div>
						<label htmlFor="Name">Name:</label>
						<br></br>
						<input
							type="text"
							defaultValue={name}
							onBlur={handleBlank}
							name="Name"
						/>
					</div>
					<div>
						<label htmlFor="email">Email address:</label>
						<br></br>
						<input
							type="email"
							defaultValue={email}
							name="email"
							onBlur={handleChange}
						/>
					</div>
					<div>
						<label htmlFor="Message">Message:</label>
						<br></br>
						<textarea
							name="Message"
							defaultValue={message}
							onBlur={handleBlank}
							rows="5"
						/>
					</div>
					{errorMessage && (
						<div>
							<p className="error-text">{errorMessage}</p>
						</div>
					)}
					<button type="submit">Submit</button>
				</form>
			</div>
		</section>
	);
}

export default Contact;

// import React from 'react'

// function Contact() {
//   return (
//     <section id="contactMe" className="contact">
//       <div className="flex-row">
//         <h2 className="section-title secondary-border">Contact Me</h2>
//       </div>

//       <div className="contactInfo">
//         <div>
//           <p>Here are my contact info:</p>
//           <address>
//           New York, NY <br />
//             Phone: <a href="tel:646.374.9692">646</a>
//             <br />
//             Email:{" "}
//             <a href="mailto://filalibria@yahoo.fr">
//               filalibria@yahoo.fr
//             </a>
//           </address>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Contact;




// // import React from 'react'

// // const Contact = () => {
// //   return (
// //     <main id="contact">
// //       <h1 class="lg-heading">Contact</h1>
// //       <section class="boxes">
// //         <div><span class="text-secondary">Email:</span> bria.filali@gmail.com</div>
// //         <div><span class="text-secondary">Phone:</span> </div>
// //         <div><span class="text-secondary">Address:</span> 784 Columbus Ave aprt 11S,10025, NY</div>
// //       </section>
// //     </main>
// //   )
// // }

// // export default Contact