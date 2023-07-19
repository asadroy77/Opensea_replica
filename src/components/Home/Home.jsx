import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import MediaCard  from "./Card";
import Grid from '@mui/material/Grid';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { DataGrid } from '@mui/x-data-grid';
import { Typography } from '@mui/material';




const Home = () => {

  const columns = [
    { field: 'rank', headerName: 'Rank', width: 90 ,  sortable: false,
    filterable: false,
    
  
  },
    { field: 'collection', headerName: 'Collection',
     renderCell: (params) => (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={params.row.image} alt="Image" style={{ width: '60px', height: '70px', margin: '10px' }} />
        <span>{params.row.name}</span>
      </div>
    ), width: 300 ,  sortable: false,
    filterable: false },
    { field: 'fprice', headerName: 'Floor price', width: 100 ,  sortable: false,
    filterable: false },
    { field: 'volume', headerName: 'Volume', width: 100 , sortable: false,
    filterable: false } ]


    const rows = [
      { id:1, rank: 1, name: "james"  ,image:"favicon.png", fprice: 'Jon', volume: 35 },
      { id:2, rank: 2, name: 'Lannister',image:"favicon.png", fprice: 'Cersei', volume: 42 },
      { id:3, rank: 3, name: 'Lannister',image:"favicon.png", fprice: 'Jaime', volume: 45 },
      { id:4, rank: 4, name: 'Stark',image:"favicon.png", fprice: 'Arya', volume: 16 },
      { id:5, rank: 5, name: 'Targaryen',image:"favicon.png", fprice: 'Daenerys', volume: 68 },
      { id:6, rank: 6, name: 'Melisandre',image:"favicon.png", fprice: null, volume: 150 },
      { id:7, rank: 7, name: 'Clifford',image:"favicon.png", fprice: 'Ferrara', volume: 44 },
      { id:8, rank: 8, name: 'Frances',image:"favicon.png", fprice: 'Rossini', volume: 36 },
      { id:9, rank: 9, name: 'Roxie',image:"favicon.png", fprice: 'Harvey', volume: 65 },
    ];

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


<Grid item sx={{display:"flex",justifyContent:"space-between" ,gap:1}}>

  <Box sx={{  width: '95%' }}>

  <DataGrid
        sx={{
          
          '& .MuiDataGrid-root': {
            border: 'none',
          },
          '& .MuiDataGrid-row':{ maxHeight:"80px !important"},
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
        autoHeight
        disableRowSelectionOnClick={false}
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[10]}
       disableColumnMenu
       showCellVerticalBorder={false}
       showColumnVerticalBorder={false}
       disableColumnSelector
       
      />
  
  </Box>


  <Box sx={{ height: 500, width:'95%' }}>


  <DataGrid
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
      />
    
  </Box>




</Grid>




</Grid>



 




    </>
  )
}

export default Home;