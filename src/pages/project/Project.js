import React from 'react'
import { useParams } from 'react-router-dom'
import { useDocuments } from '../../hooks/useDocument' 

// styles
import './Project.css'

// Components
import ProjectSummary from './ProjectSummary'
import ProjectComments from './ProjectComments'

export default function Project() {

  const { id } = useParams()
  const { document, error } = useDocuments('projects', id)

  if (error) {
    return <div className='error'>{error}</div>
  }

  if (!document) {
    return <div className='loading'>Loading...</div>
  } 

  return (
    <div className='project-details'>
      <ProjectSummary project={document}/>
      <ProjectComments project={document}/>
    </div>
  )
}
