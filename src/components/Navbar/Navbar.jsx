import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import SearchIcon from '@mui/icons-material/Search';
import Autocomplete from '@mui/material/Autocomplete';
import WalletIcon from '@mui/icons-material/Wallet';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import  ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Button from '@mui/material/Button';
import { useState } from 'react';
import BasicModal from "./Modal";
import  CustomMenu from "./Profilemenu";
import IconButton from '@mui/material/IconButton';
import { useRef, useEffect } from 'react';
import {StyledSearchInput , Slash ,Search,SearchIconWrapper, StyledInputBase} from "./StyledComponents";
import Paper from '@mui/material/Paper';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';




const Navbar = () => {
  const theme  = useTheme()
     
  const lg = useMediaQuery(theme.breakpoints.down("lg"))

  const md = useMediaQuery(theme.breakpoints.down("md"))

  const mdup = useMediaQuery(theme.breakpoints.up("md"))

  const sm = useMediaQuery(theme.breakpoints.down("sm"))



  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [navbarBg, setNavbarBg] = useState(false);


  const inputRef = useRef(null);
  
  
  const paperStyle = {
    marginTop: '10px', // Adjust the top margin value as needed
    backgroundColor:"rgba(255, 255, 255, 0.12)",
    color:navbarBg ? "black" : "white"
  };



  useEffect(() => {

    const handleScroll = () => {
      const isTop = window.scrollY < 100;
      setNavbarBg(!isTop);
    };

    window.addEventListener('scroll', handleScroll);

   
    const handleKeyPress = (event) => {
      if (event.key === '/') {
        event.preventDefault();
        inputRef.current.focus();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
    
  const top100names =  [
    { label: 'The Godfather', id: 1 },
    { label: 'Pulp Fiction', id: 2 },
  ];
  

 


  return (
    <>
    <AppBar  sx={{ bgcolor: navbarBg ? "white" : "transparent" , boxShadow:"none",color: navbarBg ? "black" : "white" }}>
        <Toolbar sx={{justifyContent:"space-between"}} > 
        <Box sx={{height:"4.3rem"}} > <img src="logo.png" alt='logo' style={{height:"100%"}}></img> </Box>
          
      <Box sx={{display:"flex",height:"3rem",flexGrow:0.1,justifyContent:"center"}}>  <Divider  orientation="vertical" variant="middle" flexItem  /></Box>

        <Box sx={{textAlign:"center" ,display:"flex",flexGrow:0.2,justifyContent:"space-around"}}> 
       
        <Typography variant='h6' > Drops </Typography>  
    <Typography variant='h6' > Stats </Typography> 
        </Box>

        <Box sx={{display: md ? "none":""  , flexGrow:1.8}}>   <Search sx={{color:navbarBg ? "black" : "white",
      border:navbarBg ? "solid 1px grey" :"none"}}> 
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>

        <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        
        PaperComponent={props => (
          <Paper {...props} sx={paperStyle} />
        )}
        options={top100names.map((option) => option.label)}
        renderInput={(params) => (
          <StyledSearchInput
            {...params}
            inputRef={inputRef}
            placeholder='Search items,collections and accounts'
            InputProps={{
              ...params.InputProps,
              type: 'search',
              sx:{color: navbarBg ? "black" : "white"}
            }}
          />
        )}/>

        <Slash> <Typography sx={{ color: "white"}} variant='h6'> / </Typography> </Slash>
          </Search></Box>

        <Box sx={{display: md ? "":"none" , flexGrow:1.8}}>  </Box>

        <Box sx={{backgroundColor:"rgba(255, 255, 255, 0.12)" , borderRadius:"10px",ml:1 }}>
       
        <Box> 
        <IconButton aria-label="search" sx={{display: md ? "":"none",py:2,px:1.5}}>
        <SearchIcon/> 
        </IconButton>
        </Box>

        </Box>

          <Box sx={{backgroundColor:"rgba(255, 255, 255, 0.12)" ,
          border:navbarBg ? "solid 1px grey" :"none",
           display: lg ? "none":"" , borderRadius:"10px" ,flexGrow:0.2,py:0.7}} > 
          <Box sx={{display:"flex",justifyContent:"space-evenly",alignItems:"center"}}>     
         
          
          <Button  onClick={handleOpen}  sx={{textTransform: 'none',color:navbarBg ? "black" : "white" }} startIcon={ <WalletIcon/> } >  <Typography variant="h6"> Connect Wallet </Typography></Button>
         
          
           <Divider  orientation="vertical"  flexItem  />

           <CustomMenu>


           <IconButton sx={{color:navbarBg ? "black" : "white"}} >
           <AccountCircleOutlinedIcon/>
          </IconButton> 
         
          </CustomMenu>
           
         </Box>
         </Box>


         <Box sx={{backgroundColor:"rgba(255, 255, 255, 0.12)" , borderRadius:"10px",ml:1,border:navbarBg ? "solid 1px grey" :"none" }}>
          <Box> 
        
          <IconButton aria-label="cart" sx={{py:2,px:1.5,color:navbarBg ? "black" : "white", bgcolor:"transparent"}}>
          <ShoppingCartOutlinedIcon/>
          </IconButton>
         </Box>
        </Box>

        </Toolbar>
        <BasicModal open={open} setOpen={setOpen} handleOpen={handleOpen} handleClose={handleClose}></BasicModal>
    </AppBar>
    {/* <Box> </Box> */}
    
    </>
  )
}

export default Navbar