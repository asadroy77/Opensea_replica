import React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Paper, Typography } from '@mui/material';
import { Box } from '@mui/material';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import TuneIcon from '@mui/icons-material/Tune';
import ListAltIcon from '@mui/icons-material/ListAlt';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { styled } from '@mui/material/styles';
import { customeColours } from '../../Theme/Theme';
import Divider from '@mui/material/Divider';




const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    // TabIndicatorProps={{ children: <Box  className="MuiTabs-indicatorSpan" /> }}
  />
))({
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'white',
    height:"94%",
    position:"absolute",
    zIndex: 20,
    width: '100%',
   color:"black",
   borderRadius:"0.5rem",
   marginBottom:"0.1rem"
  },
  // '& .MuiTabs-indicatorSpan': {
  //   color:"black",
  //   width: '100%',
  //   backgroundColor: 'white',
  //   borderRadius:"0.5rem",
    
   
   
  // },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: 'none', 
    minWidth: "33%",
    zIndex: 26,
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(17),
    margin:"0.1rem",
    color: 'black',
    '&.Mui-selected': {
      color:'black',
    },
    // '&.Mui-focusVisible': {
    //   backgroundColor: 'rgba(10, 195, 8, 0.32)',
    // },
  }),
);


const Layout = () => {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  

  // "#EBECF1"

  return (<>  <Box sx={{ width: '100%',bgcolor:"#EBECF1" }}>
  <Grid container   columnSpacing={1}>
    <Grid item >
      <Box sx={{background:customeColours.gradient,height:"100vh",borderRadius:"5px",display:'flex',
    flexDirection:"column" , justifyContent:"space-between"}}>

         <Box > <ListAltIcon sx={{color:"white",py:2,px:2}}></ListAltIcon> </Box>

      <Box> <TuneIcon sx={{color:"white",py:2,px:2}}></TuneIcon> </Box>

      <Box>  <PersonOutlineIcon sx={{color:"white",py:2,px:2}}></PersonOutlineIcon>  </Box>
 </Box>
    </Grid>

    
    <Grid item xs={11} sx={{borderRadius:"5px"}}>
      <Box  sx={{ bgcolor:"#FFFFFF",borderRadius:"5px",height:"100vh"}}>

    <Grid container item rowSpacing={2} justifyContent="center" alignContent={"flex-start"} >

     <Grid item  xs={11}>
      <Box sx={{borderRadius:"5px",display:"flex",justifyContent:"space-between" }}> 
     <Typography variant='h5' sx={{my:2}} >Configurations</Typography>
     <Button sx={{background:customeColours.gradient1,my:2 }} variant="contained">Contained</Button>
    </Box> 
    <Divider />
    </Grid>

    <Grid item  xs={11}>
      <Box sx={{borderRadius:"5px"}}> 
      <StyledTabs
        sx={{ borderRadius: 2 , bgcolor:"#F3F3F3" }}
        value={value}
        onChange={handleChange}
        aria-label="styled tabs example" >

        <StyledTab label="Workflows" />
        <StyledTab label="Datasets" />
        <StyledTab label="Datasets" />
      
      </StyledTabs>

         </Box> 
    
    </Grid>
    
    </Grid>

    </Box>

    </Grid>
    
  </Grid>
</Box>
    </>
  )
}

export default Layout





{/* <Grid item xs={"auto"} > 

 style={{height:"80vh", display:"flex",flexDirection:"column", borderRadius:"5px",
 justifyContent:"space-between" }}

 <Box sx={{bgcolor:"black"}}> 

<Box> <ListAltIcon sx={{px:2,py:10,color:"white"}}></ListAltIcon> </Box>

<Box> <TuneIcon sx={{px:2,py:10,color:"white"}}></TuneIcon> </Box>

 <Box>  <PersonOutlineIcon sx={{px:2,py:10,color:"white"}}></PersonOutlineIcon>  </Box>

 </Box>  

  </Grid>


<Grid item   xs={8}  sx={{ backgroundColor:"#FFFFFF",
 borderRadius:"5px"}} > 

  <Grid item xs={12} >
    <Box sx={{display:"flex" , justifyContent:"space-between",alignItems:"center",boxShadow:1,borderRadius:1,p:1 }}>
      <Typography variant='h4'> Configuration </Typography>
      <Button variant="contained">Contained</Button>

    </Box>
</Grid>


<Grid item xs={12}>

<StyledTabs
        sx={{ borderRadius: 2 , bgcolor:"#F3F3F3" }}
        value={value}
        onChange={handleChange}
        aria-label="styled tabs example" >

        <StyledTab label="Workflows" />
        <StyledTab label="Datasets" />
        <StyledTab label="Datasets" />
      
      </StyledTabs>


</Grid> 


//  </Grid> */}