import { Box, Button, Chip } from '@mui/material'
import React, { useState } from 'react'
import Sidebar from '../components/Sidebar';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #fff',
  boxShadow: 24,
  p: 4,
};

function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      {/* <Button onClick={handleOpen} variant={'outlined'}>Commands</Button> */}
      <Chip label="Commands" onClick={handleOpen} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Commands
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <code className='modalCodes'>
            -w : need a static website<br/>
            -mw : need a mern application<br/>
            -a : need an authentication api<br/>
            -d : need a design for your website<br/>
            -r : need a react website<br/>
            -n : need a nextjs website<br/>
            -ec : need an e-commerce store<br/>
            </code>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}


const HelpPage = () => {
  const [botMsgs, setBotMsgs] = useState([
    "Hello Client Tell me, How can I help you?"
  ])
  const [userMsgs, setUserMsgs] = useState([])
  function sendBotMsg(c) {
    switch (c) {
      case "-w":
        setUserMsgs([...userMsgs,"I need a HTML/CSS/JS website for my business."])
        setTimeout(() => {
          setBotMsgs([...botMsgs,"Please send details to adk2049@gmail.com"])
        }, 1000);
        break;
      case "-mw":
        setUserMsgs([...userMsgs,"I need a MERN website for my business."])
        setTimeout(() => {
          setBotMsgs([...botMsgs,"Please send details to adk2049@gmail.com"])
        }, 1000);
        break;
      case "-a":
        setUserMsgs([...userMsgs,"I need an authentication Api for my business."])
        setTimeout(() => {
          setBotMsgs([...botMsgs,"Please send details to adk2049@gmail.com"])
        }, 1000);
        break;
      case "-d":
        setUserMsgs([...userMsgs,"I need a website design for my business."])
        setTimeout(() => {
          setBotMsgs([...botMsgs,"Please send details to adk2049@gmail.com"])
        }, 1000);
        break;
      case "-r":
        setUserMsgs([...userMsgs,"I need a ReactJs website for my business."])
        setTimeout(() => {
          setBotMsgs([...botMsgs,"Please send details to adk2049@gmail.com"])
        }, 1000);
        break;
      case "-n":
        setUserMsgs([...userMsgs,"I need a NextJs website for my business."])
        setTimeout(() => {
          setBotMsgs([...botMsgs,"Please send details to adk2049@gmail.com"])
        }, 1000);
        break;
      case "-ec":
        setUserMsgs([...userMsgs,"I need a E-commerce website for my business."])
        setTimeout(() => {
          setBotMsgs([...botMsgs,"Please send details to adk2049@gmail.com"])
        }, 1000);
        break;
    
      default:
        setUserMsgs([...userMsgs])
        setTimeout(() => {
          setBotMsgs([...botMsgs,c + "=>Command does not exist"])
        }, 1000);
        break;
    }
  }
  return (
    <div className='helpPage fcc'>
      <Sidebar brandText={'Hire me'} />
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
<Chat botMsgs={botMsgs} userMsgs={userMsgs} />
<CommandBoxInput sendBotMsg={sendBotMsg}/>

    </Box>
    </div>
  )
}

export default HelpPage


const Chat = ({botMsgs,userMsgs}) => {
  return(
    <div className='chat'>
      <div className="botmessages">
      {
        botMsgs.map((e,i)=>{
          return(
            <p key={e} className="botmsg">{e}</p>
          );
        })
      }
      </div>
      <div className="usermessages">
        {userMsgs.map((e,i)=>{
          return(
        <p key={i   } className="usermsg">{e}</p>
          )
        })}
      </div>
    </div>
  )
}
const CommandBoxInput = ({sendBotMsg}) => {
  const [userCommand, setUserCommand] = useState("");
  function handleCommandExecution() {
    if(userCommand){
      sendBotMsg(userCommand)
    }else{
      sendBotMsg("Please Enter some existing command.")
    }
  }
  return(
    <div className='commandBoxInput'>
      <BasicModal/>
      <input value={userCommand} onChange={(e)=>{setUserCommand(e.target.value)}} type="text" name="command" id="commandInput" placeholder='Execute command as per your need..' />
      <Button onClick={handleCommandExecution} variant={'outlined'}>Execute</Button>
    </div>
  )
}


