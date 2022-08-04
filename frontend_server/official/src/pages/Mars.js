import React from 'react'
import {useNavigate} from 'react-router-dom'
import Box from '@mui/material/Box';
import { Button } from '@mui/material';

const Mars = () => {
  const navigate = useNavigate();
  
  return (
    <div className='mars fcc'>
    <Box
      sx={{
        width: 1000,
        height: 600,
        backgroundColor: '#8357ff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'column',
        borderRadius: '30px',
      }}
    >
    <h1 style={{color:'white',marginBottom:'20px'}}>Welcome to Mars.</h1>
    <Button onClick={(e)=>{navigate('/profile/achal')}} sx={{backgroundColor:'#fff',
      color:'#8357ff',
      borderRadius: '30px',
      transition: 'all 0.2s ease-in-out',
      '&:hover': {
        backgroundColor: '#f4f4f4',
        color: '#0D2C33'
        },}} variant='contained'>Visit Pluto</Button>
    </Box>
    </div>  
  )
}

export default Mars