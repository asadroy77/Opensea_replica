import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';


const style = {
  position: 'absolute',
  top: '30%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  borderRadius:"1rem",
  p: 4,
};

export default function BasicModal({open,setOpen,handleOpen,handleClose}) {
  

  return (
    <div>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          
        <Box>

          <Box sx={{display:"flex" ,justifyContent:"space-between"}}>
            <Box sx={{textAlign:"center",flexGrow:1}}> <Typography variant='h6'>Connect Your Wallet </Typography></Box>

            <Box> <button onClick={handleClose}> <CloseIcon></CloseIcon> </button> </Box>
            
          </Box>

          <Box sx={{textAlign:"center"}}><Typography variant='p'> If you don't have a wallet, you can select
           a provider and create one now. Learn more </Typography> </Box>

        </Box>
       

        <Divider sx={{bgcolor:"black", my:3}} variant="middle" />

        <nav aria-label="main ">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
              
              <Typography variant="body2"> popular</Typography>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="Drafts" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
     

        </Box>
      </Modal>
    </div>
  );
}