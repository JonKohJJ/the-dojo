import { NavLink } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'
import Avatar from './Avatar'

// styles & images
import './Sidebar.css'
import DashboardIcon from '../assets/dashboard_icon.svg'
import AddIcon from '../assets/add_icon.svg'


import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {

    const { user } = useAuthContext()

  return (
    <div className='sidebar'>
        <div className='sidebar-content'>
            <div className='user'>
                <Avatar src={user.photoURL}/> 
                <p>Hello {user.displayName}</p>
            </div>
            <nav className='links'>
                <ul>
                    <li>
                        <NavLink exact to='/'>
                            <img src={DashboardIcon} alt='dashboard icon'></img>
                            <span>Dashboard</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/create'>
                            <img src={AddIcon} alt='add project icon'></img>
                            <span>New Project</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
  )
}
