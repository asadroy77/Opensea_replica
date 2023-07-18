import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


export default function MediaCard({url,mediatitle}) {
  return (
    <Box sx={{display:"flex"}}> 
    <Card sx={{ 
   height:400,
   width:"90%",
   position:"relative",
   backgroundImage: `url("download.jpg")`,
   backgroundPosition: "center",
   backgroundSize: "cover",
   backgroundRepeat: "no-repeat",
   backgroundColor: "transparent",
   zIndex:3,
  
  }}>
      {/* <CardMedia
        sx={{ height:150, width:"100%",position:"absolute",top:0,right:0,left:0,bottom:0,zIndex:3 }}
        image="download.jpg"
        title="green iguana"
      /> */}

    <Box sx={{display:"flex", flexDirection:"column",position:"absolute",zIndex:4,bottom:0}}>  
      <CardContent >
        <Typography gutterBottom variant="h6" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species
        </Typography>
      </CardContent>
      <CardActions >
        <Button size="small">Share</Button>
      </CardActions>
      
      </Box>
      
          </Card>


          </Box>

    

   
  );
}
