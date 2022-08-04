import { Box, Button, Rating } from '@mui/material'
import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Review from '../components/Review'
import getDataFromDb from '../api'
const ClientsPage = ({reviews,setReviews}) => {
  const [userRating, setUserRating] = useState(null);
  const [userFeedBack, setUserFeedBack] = useState("");
  const [userName, setUserName] = useState("");
  const BASE_URI = 'http://localhost:3001/api/achal';
  async function reviewSubmitted(e) {
    if(userRating&&userFeedBack&&userName){
      const feedBackData = {
        username:userName,
        message:userFeedBack,
        rating:userRating
      };
      let res = await fetch(`${BASE_URI}/post-reviews`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(feedBackData),
      })
      let d = await res.json()
      setReviews([...reviews,d.data])
    }
  }

  return (
    <div className='helpPage fcc'>

      <Sidebar brandText={'Review'} />
         <Box
      sx={{
        width: '75%',
        height: '98vh',
        backgroundColor: '#f4f4f4',
        display: 'flex',
        padding: '10px 80px',
        justifyContent: 'flex-start',
        flexDirection:'column',
        borderRadius: '30px',
        overflow:'hidden',
        overflowY:'scroll',
      }}
    >

      <div className="reviews">
        {reviews.map((e,i)=>{
          return(
      <Review key={e._id} msg={e.message} rating={e.rating} author={e.username} />
          )
        })}
      </div>

      <div className="reviewAdd">
       <input onChange={(e)=>setUserName(e.target.value)} type="text" name="author" id="rAuthor" placeholder='Enter username'/>
       <input onChange={(e)=>setUserFeedBack(e.target.value)} name="feedbackMsg" id="feedbackInput" type='text' placeholder='Write, What do you think about Achal?'/>  
             <Rating
                style={{color:'#00ff80'}}
                name="simple-controlled"
                value={userRating}
                onChange={(event, newValue) => {
                  setUserRating(newValue);
                }}
      />
      <Button onClick={(e)=>reviewSubmitted(e)} style={{backgroundColor:'#8409ff',width:'100px',marginTop:'15px'}} variant="contained">Submit</Button>
  
  
   </div>

    </Box>
    </div>
  )
}

export default ClientsPage