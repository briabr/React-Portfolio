import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import projectList from './projectList';
import ProjectTemplate from './projectTemplate'

function Project() {
  return (
    <>
    {projectList.map((projectDetails, index) => {
  return <ProjectTemplate  {...projectDetails}/>
})}
    </>
    

    )
}

export default Project


