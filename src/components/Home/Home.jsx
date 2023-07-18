import React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import MediaCard  from "./Card";
import Grid from '@mui/material/Grid';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import IconButton from '@mui/material/IconButton';




const Home = () => {



  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };


  return (<>
 
  <Grid container direction="column">
  {/* item 1 */}
   <Grid item sx={{position:"relative", width:"100%",
  height: "100vh",
  backgroundImage: `url("cover.png")`,
  backgroundPosition: "center",
  backgroundSize: "auto",
  backgroundRepeat: "no-repeat",
  backgroundColor: "transparent",
  zindex:2,
  
 }}>
   

<Box sx={{display:"flex",flexDirection:"column",zindex:3,position:"absolute",top:"20vh",
alignItems:"center",width:"100%"}}>
 
 <Box sx={{width:"100%"}}>
    <Stack spacing={2} direction="row"sx={{mx:5}} >   
        <Button sx={{color:"grey"}} variant="text">All </Button>
        <Button sx={{color:"grey"}} variant="text">Drops</Button>
        <Button sx={{color:"grey"}} variant="text">Characters</Button>
        <Button sx={{color:"grey"}} variant="text">Outlined</Button>
      </Stack>

</Box>

          <Box sx={{width:"70vw",borderRadius:5,overflow: "hidden",my:5 }}>
        <iframe width="100%" height="315" 
        src="https://www.youtube.com/embed/rrLAg7xNERA?controls=0"
        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media;
        border-radius: 20px;
        gyroscope; picture-in-picture; web-share" allowfullscreen> </iframe>

        </Box>

</Box>

</Grid> 

{/* item 2 */}
   <Grid item sx={{display:"flex",my:5,justifyContent:"center"}} >

<Box sx={{width:"85vw"}}> 

<Carousel
 
  showDots={true}
  responsive={responsive}
  infinite={true}
  autoPlaySpeed={1000}
  keyBoardControl={true}
  // renderButtonGroupOutside={true}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-20-px"
  
>
  
 <MediaCard></MediaCard>
 <MediaCard></MediaCard>
 <MediaCard></MediaCard>
 <MediaCard></MediaCard>
 <MediaCard></MediaCard>
 
  </Carousel>

</Box>
  
  </Grid>
</Grid>



 




    </>
  )
}

export default Home;