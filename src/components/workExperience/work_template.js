import React from 'react'

const WorkTemplate = ({title, company, duration, experience, technology}) => {
    const styles = {
        parent_div: {
            margin: "15px"
            // border: "1px solid red",
        },
        title: {
            width: "100%",
            border: "1px solid black",
            margin: "15px",
            color: "darkblue",
            textAlign: "center"
        },
        company_name: {
            flex: "50%",
            border: "1px solid black",
            margin: "15px",
            textAlign: "center"

        },
        company_details: {
            width: "60%",
            margin: "auto"

        },
        work_duration: {
            flex: "50%",
            border: "1px solid black",
            margin: "15px",
            textAlign: "center"

        },
        work_experience: {
            // border: "1px solid black",
            margin: "15px"
        },
        technology: {
            border: "1px solid black",
            margin: "15px",
            textAlign: "center"

        
        }
    }
  return (
    <>
    <div id='parent_div' style={styles.parent_div}>
        <div id='title' style= {styles.title}>{title}</div>
        <div id='company_details' style= {styles.company_details} className='d-flex'>
            <div id='company_name'style= {styles.company_name} >{company}</div>
            <div id='work_duration'style= {styles.work_duration}>{duration}</div>
        </div>
        <div id='work_experience' style= {styles.work_experience}>{experience}</div>
        <div id='technology' style= {styles.technology}>{technology}</div>
    </div>
    </>
  )
}

export default WorkTemplate