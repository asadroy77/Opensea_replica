import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import MediaCard  from "./Card";
import Grid from '@mui/material/Grid';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { DataGrid } from '@mui/x-data-grid';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import { useEffect } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Slider from "react-slick";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import "./Home.css";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';




function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  console.log(props)
  return (
    <div
      className={className}
      style={{ ...style, background:"black",borderRadius:"20px",display:"flex",justifyContent:"center",alignItems:"center" }}
      onClick={onClick}> <NavigateNextIcon sx={{color:"white"}}/> </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style,background:"black",borderRadius:"20px",display:"flex",justifyContent:"center",alignItems:"center" }}
      onClick={onClick}> <NavigateBeforeIcon sx={{color:"white"}} /> </div>
  );
}



var settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 520,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

const CusExpandMoreOutlinedIcon = styled(ExpandMoreOutlinedIcon)(({ open }) => ({
    // ...(!open && {
    
     /* Smoothly animate the transform property */
     "&:hover" :{
      transition: "transform 1s ease" ,
      transform: "rotate(360deg)",
     }
  
   
    
  //  } 
    // )
}));

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <Box  className="MuiTabs-indicatorSpan" /> }}
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
  '& .MuiTabs-indicatorSpan': {
    color:"black",
    width: '100%',
    backgroundColor: 'white',
    borderRadius:"0.5rem",
    
   
   
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: 'none', 
    minWidth: 0,
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

const Home = () => {
  
  
  const theme  = useTheme()

   
  const lg = useMediaQuery(theme.breakpoints.down("lg"))

  const md = useMediaQuery(theme.breakpoints.down("md"))

  const sm = useMediaQuery(theme.breakpoints.down("sm"))

  const data = [
    { id:1, rank: 1, name: "james"  ,image:"favicon.png", fprice: 'Jon', volume: 35 },
    { id:2, rank: 6, name: 'Lannister',image:"favicon.png", fprice: 'Cersei', volume: 42 },
    { id:3, rank: 1, name: 'Lannister',image:"favicon.png", fprice: 'Jaime', volume: 45 },
    { id:4, rank: 4, name: 'Stark',image:"favicon.png", fprice: 'Arya', volume: 16 },
    { id:5, rank: 6, name: 'Targaryen',image:"favicon.png", fprice: 'Daenerys', volume: 68 },
    { id:6, rank: 7, name: 'Melisandre',image:"favicon.png", fprice: null, volume: 150 },
    { id:7, rank: 7, name: 'Clifford',image:"favicon.png", fprice: 'Ferrara', volume: 44 },
    { id:8, rank: 24, name: 'Frances',image:"favicon.png", fprice: 'Rossini', volume: 36 },
    { id:9, rank: 6, name: 'Roxie',image:"favicon.png", fprice: 'Harvey', volume: 65 },
    { id:19, rank: 24, name: 'Roxie',image:"favicon.png", fprice: 'Harvey', volume: 65 },
  ]

  const [rows, setRows] = React.useState(data );


  const [anchorEl, setAnchorEl] = React.useState(null);
  var  open = Boolean(anchorEl);
   
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(false);
   
  };

  const [value, setValue] = React.useState("workflows");

  const handleChange = (event, newValue) => {

    // console.log("tab changed")
    // console.log(newValue)
    setValue(newValue);
  };


  const [value1, setValue1] = React.useState(0);

  const handleChange1 = (event, newValue) => {
    if(newValue==0){
      setRows(data)
      setValue1(newValue);
    }else{
      setRows(()=> data.filter(item=> item.rank == newValue ) )
      setValue1(newValue);
    }
    
  };

 

  const columns = [
    { field: 'rank', headerName: 'Rank', width: 90 ,  sortable: false,
    filterable: false,
  editable:false
  },
    { field: 'collection', headerName: 'Collection',
     renderCell: (params) => (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={params.row.image} alt="Image" style={{ width: '60px', height: '70px', margin: '15px' }} />
        <span>{params.row.name}</span>
      </div>
    ), width: 300 ,  sortable: false,
    filterable: false },
    { field: 'fprice', headerName: 'Floor price', width: 100 ,  sortable: false,
    filterable: false },
    { field: 'volume', headerName: 'Volume', width: 100 , sortable: false,
    filterable: false } ]


    

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 700 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };


  return (<>
 
  <Grid container  direction="column">
  {/* item 1 */}
   <Grid item sx={{position:"relative",
  height: "100vh",
  backgroundImage: `url("cover.png")`,
  backgroundPosition: "center",
  backgroundSize: "auto",
  backgroundRepeat: "no-repeat",
  backgroundColor: "transparent",
  zindex:2,
  
 }}>
   

<Box sx={{display:"flex",flexDirection:"column",zindex:3,position:"absolute",top:"20vh",
alignItems:"center", width:"100%"}}>
 
 <Box sx={{display:"flex" ,justifyContent:  sm ? "center":"flex-start",width: "100%" }}>
    <Stack spacing={2} direction="row" >   
        <Button sx={{color:"grey"}} variant="text">All </Button>
        <Button sx={{color:"grey"}} variant="text">Drops</Button>
        <Button sx={{color:"grey"}} variant="text">Characters</Button>
        <Button sx={{color:"grey"}} variant="text">Outlined</Button>
      </Stack>

</Box>

          <Box sx={{width:  sm ? "85vw":"70vw",borderRadius:5,overflow: "hidden",my:5 }}>
        <iframe width="100%" height="315" 
        src="https://www.youtube.com/embed/rrLAg7xNERA?controls=0"
        title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media;
        border-radius: 20px;
        gyroscope; picture-in-picture; web-share" allowFullScreen > </iframe>

        </Box>

</Box>

</Grid > 

{/* item 2 */}
   <Grid item  sx={{display:"flex",justifyContent:"center",my:5}} > 
<Box sx={{width:"80vw" }}> 


{/* ".slick-arrow":{backgroundColor:"grey",borderRadius:"15px",border:"1px solid grey"} */}



<Slider {...settings} >
         
          <MediaCard></MediaCard>
          <MediaCard></MediaCard>
          <MediaCard></MediaCard>
          <MediaCard></MediaCard>
          <MediaCard></MediaCard>
          <MediaCard></MediaCard>
          <MediaCard></MediaCard> 
           <MediaCard></MediaCard>
          <MediaCard></MediaCard> 
           <MediaCard></MediaCard>
          <MediaCard></MediaCard>
          
</Slider>





</Box>
  
 </Grid> 

<Grid  item sx={{display:"flex",justifyContent:"space-between",my:5}}  >
 <Box>
  <StyledTabs
          sx={{ borderRadius: 2 , bgcolor:"#F3F3F3" }}
          value={value}
          onChange={handleChange}
          aria-label="styled tabs example" >

          <StyledTab value="workflows"  label="Workflows" />
          <StyledTab value="datasets" label="Datasets" />
         
        </StyledTabs>
    
  </Box>
      

<Box>
        <StyledTabs
          sx={{ borderRadius: 2 , bgcolor:"#F3F3F3"}}
          value={value1}
          onChange={handleChange1}
          aria-label="styled tabs example" >

          <StyledTab value={1} label="1" />
          <StyledTab  value={6} label="6" />
          <StyledTab value={7} label="7" />
          <StyledTab value={24} label="24" />
          <StyledTab value={0} label="ALL" />
         
        </StyledTabs>
</Box>
       
             
        <Button sx={{ color:"black",bgcolor:"#F3F3F3" ,borderRadius:"2" ,"&:hover":{bgcolor:"transparent"}}} disableRipple variant="text"  id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick} endIcon={<CusExpandMoreOutlinedIcon open={open}/>} > 
        Menu
      </Button>
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>



</Grid>


<Grid item  xs={12} >
  
<Grid container item xs={12} sx={{ overflowX: 'auto' }} > 
  

  <DataGrid
        sx={{
          
          '& .MuiDataGrid-root': {
            border: 'none',
            overflowX:"scroll"
           
          },
          "& .MuiDataGrid-columnSeparator":{display:"none"},
          '& .MuiDataGrid-row':{ maxHeight:"80px !important",pb:"6px"},
          '& .MuiDataGrid-row:focus': {
            border: 'none',
          },
          '& .MuiDataGrid-cell:focus': {
            outline: 'none',
          },
          '& .MuiDataGrid-cell' : { maxHeight:"80px !important"} ,

          '& .MuiDataGrid-columnHeader:focus' :{
            outline: 'none'
          },
          '& .MuiDataGrid-withBorderColor' : {
            border:"none"
          }

        }}

        hideFooter
       
        disableRowSelectionOnClick={false}
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 12,
            },
          },
        }}
        pageSizeOptions={[12]} 
       disableColumnMenu
       showCellVerticalBorder={false}
       showColumnVerticalBorder={false}
       disableColumnSelector
       
      />
  
  </Grid>


  {/* <Grid item xs={12} md={12} lg={6}>
  <DataGrid
        autoHeight
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]} 
     disableColumnMenu
      /> */}
      
    
  {/* </Grid> */}
 
</Grid>

</Grid>

    </>
  )
}

export default Home;