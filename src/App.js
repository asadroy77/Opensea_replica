import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import CustomeList from "./components/List/List";
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import "./App.css"
// import "./App.scss";
import { customeTheme } from "./Theme/Theme";
import { Box } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { customeColours } from "./Theme/Theme";
import Layout from "./components/Layout/Layout";
import { Mytheme } from "./Theme/Theme1";
import Form1 from "./components/Forms/Form1";



function App() {
 
  return (<>    
  
  <ThemeProvider theme={customeTheme}>
    <div>
      <Navbar ></Navbar> 
      <Home></Home>
      
      {/* 
   vgvhhjkjk
      <Box sx={{backgroundImage:customeColours.gradient ,width:"200px",height:"200px"}}> MAIN </Box>
     
      <Box sx={{bgcolor: (theme) => theme.palette.primary.main ,width:"200px",height:"200px"}}>  light </Box>

      <Box sx={{bgcolor: (theme) => theme.palette.primary.light ,width:"200px",height:"200px"}}>  dark </Box>


      <div  className= "div1" variant="2"> </div>
      

    </div> */}


     <Layout> </Layout> 
     {/* <Form1></Form1> */}
     
      </div>

    </ThemeProvider>

    </>

  );
}

export default App;
