import React from 'react';

export default function About() {
	return (
		<section>
			<div className="center" id="about">
				<h1 className="page-header">About</h1>
			</div>
			<div className="center">
				<img
					src={require('../../assets/images/Headshot.jpg')}
					alt="info"
					className="photo"
				/>
			</div>
			<div>
				<p>
					I am a full stack web developer student interested in coding and web development.
					
				</p>
				<p>
					I applied knowledge learned in 
					recent project. I worked on a team of five to{' '}
					<a
						href="https://github.com/briabr?tab=repositories"
						target="_blank" rel="noreferrer"
					>
						develop
					</a>{' '}
					a{' '}
				</p>
			</div>
		</section>
	);
}




















// import React from "react";


// export default function About() {
//   return (
//     <div>
//       <p className="content is-medium">Full Stack Developer</p>
//       <hr />
//       <img className="my-pic" src={process.env.PUBLIC_URL + '/Headshot.jpg'} alt="Baighya El filali"/>
//       <p className="content is-italic mt-4">
//         I'm Bria and I am very interested in coding and web development. 
//       </p>
//       <p className="content">
//         I always act as a product manager for learning resources, which guides
//         users to what they need in the moment, but also enable them to explore
//         content on their terms using video, audio, documentation, and so much
//         more in an advanced learning ecosystem.
//       </p>
//     </div>
//   );
// }

