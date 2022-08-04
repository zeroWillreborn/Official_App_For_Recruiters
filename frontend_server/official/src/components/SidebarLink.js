import React from 'react'
import { NavLink } from 'react-router-dom'

const SidebarLink = ({path,text}) => {
  return (

    <div  className={'sidebarLink fcc'}>
    <NavLink to={path} className='sidebarLinkText'>{text}</NavLink>
    </div>
    // <NavLink to={path} className={'sidebarLink fcc'}>
    //     <p className='sidebarLinkText'>{text}</p>
    // </NavLink>
  )
}

export default SidebarLink