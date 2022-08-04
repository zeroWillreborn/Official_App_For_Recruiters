import { Chip } from '@mui/material'
import React, { memo, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const InfoBox = ({count}) => {
  const [supported, setSupported] = useState(false)
  const [supportCount, setSupportCount] = useState(count)
  const BASE_URI = 'http://localhost:3001/api/achal';
  
async function getD() {
  let da= await fetch('http://localhost:3001/api/achal/getData')
  let data = await da.json()
  setSupportCount(data.resp2[0].supportCount);
}

useEffect(() => {
  getD()
}, [])


  async function addSupporter() {
    let res = await fetch(`${BASE_URI}/support`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({supportCount:1}),
    })
    let resp = await res.json()
    setSupportCount(resp.totalSupporter.supportCount)
    
  }
  return (
    <div className='infoBox'>
        <div className="avatar">
            <img onClick={(e)=>{window.location.href = "http://localhost:3000/achal.png"}} src="/achal.png" alt="Achal" />
            {
              !supported ?
              <Chip sx={{backgroundColor:'#fff',color:'#636363',
            }} label={`Support | ${supportCount}`} variant="outlined" onClick={(e)=>{addSupporter();setSupported(true)
          }} />
               : 
              <Chip label={`Supported | ${supportCount}`} color='success' />
            }
        </div>

        <div className="infos">
            <p className="name">Achal Chaudhary</p>
            <p className="email">adk2049@gmail.com</p>
            <p className="addr">Bihar, India</p>
            <p className="phone">6203978361</p>
            <div className="socialLinks"> 
            <Link onClick={(e)=>{window.location.href = 'https://github.com/zeroWillreborn'}} to={'/'}>Github</Link>
            <Link onClick={(e)=>{window.location.href = 'https://linkedin.com/in/achal-chaudhary-b9289a234/'}} to={'/'}>LinkedIn</Link>
            <Link onClick={(e)=>{window.location.href = 'https://leetcode.com/zeroWillreborn/'}} to={'/'}>Leetcode</Link>
            <Link onClick={(e)=>{window.location.href = 'https://www.hackerrank.com/adk2049?hr_r=1'}} to={'https://www.hackerrank.com/adk2049?hr_r=1'}>Hackerrank</Link>
            <Link onClick={(e)=>{window.location.href = 'https://www.codechef.com/users/zerowillreborn'}} to={'/'}>Codechef</Link>
            <Link onClick={(e)=>{window.location.href = 'https://www.youtube.com/channel/UCJpvhUG1gw5kl3MmI9hQGlQ'}} to={'/'}>Youtube</Link>
            </div>

        </div>
    </div>
  )
}

export default memo(InfoBox)