import React from 'react'
import workExperience from './work_data'
import WorkTemplate from './work_template'

import "/Users/lilybro/react-portfolio/src/components/workExperience/index.css"

const index = () => {
    
  return (
    <>
    {workExperience.map(experience => {
        return <WorkTemplate {...experience} />
    })}
    
    </>
  )
}

export default index