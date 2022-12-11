import img1 from '../../assets/images/astrologica-ss.png'
import img2 from '../../assets/images/safemed.png'

const projectList = [
    {
        name: 'Astrologica',
        tech: ['HTML','CSS','Javascript','node','React'],
        description: `The users want an application that would help them view events happening around them such as celestial movements. 
        The application will help the the user narrow down the astrological events to show the ones that are closest to them. 
        The application will also account for users current whereabouts to display accurate information relevant to them. 
        We learned a lot from this project particularly: writting functions, using APIs data, using CSS framework other than bootstrap, html and most importantly working with branches in GitHub.`,
        image_source: img1

    },
    {
        name: 'safeMed',
        tech: ['HTML','CSS','Javascript','node','React'],
        description: `This application is here to help transform technology in the healthcare field.
        safeMed is a unqiue Electronic Medication Admin Record database application that will help increase the productivty and performance of healthcare workers such as Nurses, 
        Medical Doctors, and Pharmacist while working safely to manage patient medications. 
        Our application provides a safe and secure collaboration between interdisciplinary teams within 
        facilities eg. Hospitals, Nursing Homes, and Outpatient. Some of the technologies used to build safeMed 
        include: Javascript, Handlebars, Node.js, Express, and more. Our goal is to continue to advance the 
        features in technology in our application through updates in order to create the best user experience. 
        safeMed is the future of eMAR! Our goal is help medical professionals spend more time with patients and 
        less time dealing with outdated technology.`,
        image_source: img2
    }
]
export default projectList