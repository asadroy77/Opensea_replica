import React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';



const Background = styled("div")({
  position:"absolute",
 
  width: "100vw",
  height: "100vh",
  backgroundImage: `url("cover.png")`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  zIndex:-12
});

const Home = () => {
  return (<>
  <Box sx={{position:"relative"}}>
  <Background/>

  </Box>
  
    </>
  )
}

export default Home