import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Fade from '@mui/material/Fade';
import Zoom from '@mui/material/Zoom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';


export default function CustomMenu({children}) {

  const CustomTooltip = styled(Tooltip)(({ theme }) => ({
    '& .MuiTooltip-tooltip': {
      backgroundColor: 'blue', // Set your desired background color here
     
    },
  }));


  const CustMenu = <>
  <Box >
      <nav aria-label="main ">
        <List>
        <Box > </Box>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
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
  </>
  return (
    <div>
      
      <Tooltip  componentsProps={{
    tooltip: {
      sx: {
        bgcolor: 'gray',
        maxWidth:"900px",
        width:"250px"
     
       
      },
    },
  }} 
    TransitionComponent={Zoom} title={CustMenu} placement="bottom-end">
       {children}
      </Tooltip >
    </div>
  );
}