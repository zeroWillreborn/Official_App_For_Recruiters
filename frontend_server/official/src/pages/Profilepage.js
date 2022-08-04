import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Sidebar from '../components/Sidebar';
import InfoBox from '../components/InfoBox';
import { Chip, Rating } from '@mui/material'
import { Link } from 'react-router-dom';

const Profilepage = ({supportCount,skillsData,projectsData}) => {
  return (
    <div className='profilePage'>
    <Sidebar brandText={'ACHAL'}/>
    <Box
      sx={{
        width: '75%',
        height: '98vh',
        backgroundColor: '#f4f4f4',
        display: 'flex',
        padding: '0px 80px',
        justifyContent: 'flex-start',
        flexDirection:'column',
        borderRadius: '30px',
        overflow:'hidden',
        overflowY:'scroll',
      }}
    >
      <InfoBox count={supportCount}/>
     <div className="pss">
     <Box
      sx={{
        width: '40%',
        height: '58vh',
        backgroundColor: '#8409ff',
        display: 'flex',
        padding: '10px 20px',
        justifyContent: 'flex-start',
        flexDirection:'column',
        borderRadius: '20px',
        overflow:'hidden',
        overflowY:'scroll',
      }}
    >
<h2 style={{textAlign:'center',color:'#fff',marginBottom:'5px'}}>Skills</h2>
            {
              skillsData.map((e,i)=>{
                return(
                  <Skills key={i} title={e.sTitle} rates={e.sRating} />
                )
              })
            }

      </Box>
      <Box
      sx={{
        width: '40%',
        height: '58vh',
        backgroundColor: '#8409ff',
        display: 'flex',
        padding: '10px 30px',
        justifyContent: 'flex-start',
        flexDirection:'column',
        borderRadius: '30px',
        overflow:'hidden',
        overflowY:'scroll',
      }}
    >
<h2 style={{textAlign:'center',color:'#fff',marginBottom:'5px'}}>Projects</h2>

      {
        projectsData.map((e,i)=>{
          return(
            <Projects key={i} pTitle={e.pName} pLink={e.pLink}/>
          )
        })
      }

      </Box>
     </div>
    </Box>
    </div>
  )
}

export default Profilepage

const Projects = ({pTitle,pLink}) => {
  return(
    <div className="project">
        <p>{pTitle}</p>
        <Chip style={{marginTop:'10px'}} label="DEMO" onClick={(e)=>{window.location.href=pLink}} />
      </div>
  )
}



const Skills = ({title,rates}) => {
  return(
      <div className='skill'>
          <span className="skillText">{title}</span>
          <Rating name="read-only" value={rates} readOnly />
      </div>
  )
}
