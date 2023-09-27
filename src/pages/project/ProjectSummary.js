import React from 'react'
import { useFirestore } from '../../hooks/useFirestore'
import { useAuthContext } from '../../hooks/useAuthContext'
import { useNavigate } from 'react-router-dom'

// styles
import './Project.css'

// components
import Avatar from '../../components/Avatar'

export default function ProjectSummary({ project }) {

    const navigate = useNavigate()
    const { deleteDocument } = useFirestore('projects')
    const { user } = useAuthContext()

    const handleDelete = (e) => {
        deleteDocument(project.id)
        navigate('/')
    }

  return (
    <div>
        <div className="project-summary">
            <h2 className="page-title">{project.name}</h2>
            <p>By {project.createdBy.displayName}</p>
            <p className="due-date">
                Project due by {project.dueDate.toDate().toDateString()}
            </p>
            <p className="details">
                {project.details}
            </p>
            <h4>Project assigned to:</h4>
            <div className="assigned-users">
                {project.assignedUsersList.map(user => (
                <div key={user.id}>
                    <Avatar src={user.photoURL} />
                </div>
                ))}
            </div>
        </div>
        { user.uid === project.createdBy.id && (
            <button className='btn' onClick={handleDelete}>Mark as Complete</button>
        )}
    </div>
  )
}
