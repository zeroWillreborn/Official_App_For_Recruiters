import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Rating } from '@mui/material';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);



export default function Review({msg,rating,author}) {
  return (
    <Box sx={{ width: 275,marginLeft:'10px',marginTop:'10px'}}>
      <Card style={{borderRadius:'10px',backgroundColor:'#8409ff',color:'white'}} variant="outlined">
      <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14,color:'white' }} color="text.secondary" gutterBottom>
        Client's feedback
      </Typography>
      <Typography variant="h5" component="div">
        For: Achal
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Helping Achal to grow himself.
      </Typography>
      <Typography variant="body2">
        {msg}
        <br />
        {'"Working on improving skills."'}
      </Typography>
    </CardContent>
    <CardActions style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'10px'}}>
    <Rating style={{color:'#00ff80'}} name="read-only" value={rating} readOnly />
    <span className="reviewAuthor">Author: {author}</span>
    </CardActions>
  </React.Fragment>
      </Card>
    </Box>
  );
}
