import React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';



const Background = styled("div")({
  position:"absolute",
  top:0,
  width: "100%",
  height: "100%",
  backgroundImage: `url("cover.png")`,
  backgroundPosition: "center",
  backgroundSize: "auto",
  backgroundRepeat: "no-repeat",
  filter: "blur(1px)",
  backgroundColor: "transparent" 
 

});

const Home = () => {
  return (<>
  
  <Box sx={{ backgroundColor: "transparent" }}>
  <Background/>

<Box sx={{ position:"absolute" ,top:100 , zIndex:1200,width:"100%"}} >


<Box sx={{mx:4}}>
  <Stack spacing={2} direction="row">   
      <Button sx={{color:"grey"}} variant="text">All </Button>
      <Button sx={{color:"grey"}} variant="text">Drops</Button>
      <Button sx={{color:"grey"}} variant="text">Characters</Button>
      <Button sx={{color:"grey"}} variant="text">Outlined</Button>
    </Stack>
</Box>

<Box sx={{width:"70vw",position:"relative", m:"auto",borderRadius:5,my:5,overflow: "hidden" }}>
<iframe width="100%" height="315" 
src="https://www.youtube.com/embed/rrLAg7xNERA?controls=0"
 title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media;
 border-radius: 20px;
 gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

</Box>

</Box>






</Box>





 
  
    </>
  )
}

export default Home