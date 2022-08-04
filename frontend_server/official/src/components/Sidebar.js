import { Box } from '@mui/material'
import React from 'react'
import SidebarLink from './SidebarLink'


const Sidebar = ({brandText}) => {
  return (
    <div className='sidebar'>
        <Box sx={{backgroundColor:'#8357ff',height:'10vh',width:'10vw',borderRadius:'20px',color:'white',fontSize:'25px',}} className="brand fcc"><span>{brandText}</span></Box>
        <div className="sideLinks fcc">
            <SidebarLink path={'/profile/achal'}  text={'Profile'} />
            <SidebarLink path={'/instant/help'} text={'Instant Help'} />
            <SidebarLink path={'/dear/clients'} text={'Clients'} />
        </div>
    </div>
  )
}

export default Sidebar