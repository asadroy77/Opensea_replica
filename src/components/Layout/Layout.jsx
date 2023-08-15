import React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Collapse, Paper, Typography } from '@mui/material';
import { Box } from '@mui/material';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import TuneIcon from '@mui/icons-material/Tune';
import ListAltIcon from '@mui/icons-material/ListAlt';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { styled } from '@mui/material/styles';
import { customeColours } from '../../Theme/Theme';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';


import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const MyCustomCollapse = ({ children, ...props }) => {
  return <Collapse {...props} orientation='horizontal'>{children}</Collapse>;
};

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

//  = styled(Box)
//   {({ theme , prop1}) => 
  
//  )} 
  
//   (prop1 && {
//     width:"100px"
    
//   } )
  
const StyledBox=  styled(Box)(({ prop1 }) => ({
  // Conditional styling when prop1 is truthy
  
  transition: "width 0.5s ease-in-out" ,// Add 'none' for no transition
  width: prop1 ? '11rem' : '4rem', 
}));

const Layout = () => {

  const [value, setValue] = React.useState(0);
  const [value2, setValue2] = React.useState(false);


  const [checked, setChecked] = React.useState(false);

  const handleChangeMenu = () => {
    setChecked((prev) => !prev);
  };


  
  const handleChange2 = (e) => {
    setValue2(!value2);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  

  // "#EBECF1"

  return (<>  <Box sx={{display:"flex",width:'100%',bgcolor:"#EBECF1",my:5 }}>
 
    <Box >
      <StyledBox onClick={handleChange2} prop1={value2} sx={{background:customeColours.gradient,height:"100vh",borderRadius:"5px",display:'flex',
    flexDirection:"column" , justifyContent:"space-between"}}>

         <Box > 
         <IconButton   size="small" >
         <ListAltIcon sx={{color:"white",py:2,px:2}}></ListAltIcon> </IconButton>
         </Box>

      <Box sx={{display:"flex"}}>
         <Box>
         <IconButton   size="small" onMouseEnter={handleChangeMenu} onMouseLeave={handleChangeMenu}>
         <TuneIcon sx={{color:"white",py:2,px:2}}></TuneIcon></IconButton> 
         </Box>

  <Box onMouseEnter={handleChangeMenu} onMouseLeave={handleChangeMenu} sx={{textAlign:"center", color:"white", display: (checked && value2) ? "block": "none" ,alignSelf:"flex-end"}}>
    
     <Collapse  in={checked}><Box sx={{textAlign:"left"}}> <Box> <Typography variant='p'>Profile</Typography></Box>
     <Box> <Typography variant='p'>Sign Up</Typography></Box>
    
     
       </Box></Collapse> 
       </Box>
       </Box>

      <Box>
      <IconButton   size="small" >
      <PersonOutlineIcon sx={{color:"white",py:2,px:2}}></PersonOutlineIcon></IconButton> 
           </Box>
 </StyledBox>
    </Box>

    
    {/* <Grid item xs={10} sx={{borderRadius:"5px"}}> */}
      <Box  sx={{ bgcolor:"#FFFFFF",borderRadius:"5px"}}>

    <Grid container  rowSpacing={1}  justifyContent="center"  >

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


    <Grid container item xs={11} columnSpacing={1} rowSpacing={2}  >
     

 <Grid item xs={4}>   
       <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={["Askmo","sdae"]}
          sx={{ width: "100%" }}
          renderInput={(params) => <TextField {...params} size="small" label="Movie" />}
        /> </Grid>
    

    <Grid item xs={4}>   
       <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={["Askmo","sdae"]}
          sx={{ width: "100%" }}
          renderInput={(params) => <TextField {...params} size="small" label="Movie" />}
        /> </Grid>

<Grid item xs={4}>   
       <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={["Askmo","sdae"]}
          sx={{ width: "100%" }}
          renderInput={(params) => <TextField {...params} size="small" label="Movie" />}
        /> </Grid>


<Grid item xs={4}>   
       <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={["Askmo","sdae"]}
          sx={{ width: "100%" }}
          renderInput={(params) => <TextField {...params} size="small" label="Movie" />}
        /> </Grid>  


         <Grid item xs={4}>   
       <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={["Askmo","sdae"]}
          sx={{ width: "100%" }}
          renderInput={(params) => <TextField {...params} size="small" label="Movie" />}
        /> </Grid>
 


    </Grid>
    
   

   <Grid item xs={11}> <Box > 
    <Typography variant='p' sx={{my:2}}> Settings</Typography>
    <Divider  sx={{my:2}}></Divider>
     </Box> </Grid>

     <Grid item xs={11}> <Box > 
    <Typography variant='p' sx={{my:2}}> Fee</Typography>
   
     </Box> </Grid>

    
    <Grid container item xs={11} columnSpacing={2} justifyContent="space-between">

      <Grid item xs={3}>  <TextField fullWidth  size="small" label="Movie" /></Grid>
      <Grid item xs={2}>  <Autocomplete
          disablePortal
          id="combo-box-demo23"
          options={["Askmo","sdae"]}
          sx={{ width: "100%" }}
          renderInput={(params) => <TextField {...params} size="small" label="Movie23" />}
        /></Grid>

<Grid item xs={3}>  <Autocomplete
          disablePortal
          id="combo-box-demo23"
          options={["Askmo","sdae"]}
          sx={{ width: "100%" }}
          renderInput={(params) => <TextField {...params} size="small" label="Movie23" />}
        /></Grid>

<Grid item xs={1}>  <TextField  size="small" label="Movie" /></Grid>

<Grid item xs={2}>  <Autocomplete
          disablePortal
          id="combo-box-demo23"
          options={["Askmo","sdae"]}
          sx={{ width: "100%" }}
          renderInput={(params) => <TextField {...params} size="small" label="Movie23" />}
        /></Grid>
        
    <Grid item xs={1}  >

    <Button variant="outlined" sx={{height:"100%"}} fullWidth>
       <DeleteOutlineOutlinedIcon  />
      </Button>
       
    {/* <IconButton aria-label="delete">
        <DeleteOutlineOutlinedIcon> </DeleteOutlineOutlinedIcon>
      </IconButton> */}
    </Grid>


    </Grid>
    

    <Grid container item xs={11} columnSpacing={2}>

      <Grid item xs={3}>  <TextField fullWidth  size="small" label="Movie" /></Grid>
      <Grid item xs={2}>  <Autocomplete
          disablePortal
          id="combo-box-demo23"
          options={["Askmo","sdae"]}
          sx={{ width: "100%" }}
          renderInput={(params) => <TextField {...params} size="small" label="Movie23" />}
        /></Grid>

<Grid item xs={3}>  <Autocomplete
          disablePortal
          id="combo-box-demo23"
          options={["Askmo","sdae"]}
          sx={{ width: "100%" }}
          renderInput={(params) => <TextField {...params} size="small" label="Movie23" />}
        /></Grid>

<Grid item xs={1}>  <TextField  size="small" label="Movie" /></Grid>

<Grid item xs={2}>  <Autocomplete
          disablePortal
          id="combo-box-demo23"
          options={["Askmo","sdae"]}
          sx={{ width: "100%" }}
          renderInput={(params) => <TextField {...params} size="small" label="Movie23" />}
        /></Grid>
        
    <Grid item xs={1} >

    <Button variant="outlined" sx={{height:"100%"}} fullWidth >
       <DeleteOutlineOutlinedIcon  />
      </Button>
       
    {/* <IconButton aria-label="delete">
        <DeleteOutlineOutlinedIcon> </DeleteOutlineOutlinedIcon>
      </IconButton> */}
    </Grid>


    </Grid>

    <Grid container item xs={11} columnSpacing={2}>

<Grid item xs={3}>  <TextField fullWidth  size="small" label="Movie" /></Grid>
<Grid item xs={2}>  <Autocomplete
    disablePortal
    id="combo-box-demo23"
    options={["Askmo","sdae"]}
    sx={{ width: "100%" }}
    renderInput={(params) => <TextField {...params} size="small" label="Movie23" />}
  /></Grid>

<Grid item xs={3}>  <Autocomplete
    disablePortal
    id="combo-box-demo23"
    options={["Askmo","sdae"]}
    sx={{ width: "100%" }}
    renderInput={(params) => <TextField {...params} size="small" label="Movie23" />}
  /></Grid>

<Grid item xs={1}>  <TextField  size="small" label="Movie" /></Grid>

<Grid item xs={2}>  <Autocomplete
    disablePortal
    id="combo-box-demo23"
    options={["Askmo","sdae"]}
    sx={{ width: "100%" }}
    renderInput={(params) => <TextField {...params} size="small" label="Movie23" />}
  /></Grid>
  
<Grid item xs={1} >

<Button fullWidth variant="outlined" sx={{height:"100%"}} >
 <DeleteOutlineOutlinedIcon  />
</Button>
 

</Grid>


</Grid>
 
 <Grid container item  xs={11}>
  <Grid item xs={12}>   <Button size='large' sx={{width:"100%"}} fullWidth variant="outlined" > Add fee</Button> </Grid>

 </Grid>


    
    </Grid>

    </Box>


    
  
</Box>


    </>
  )
}

export default Layout





