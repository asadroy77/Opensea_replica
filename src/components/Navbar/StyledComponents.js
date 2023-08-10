import { styled } from '@mui/system';
import {InputBase} from '@mui/material';
import TextField from '@mui/material/TextField';
import { ExpandOutlined } from '@mui/icons-material';



export const StyledSearchInput = styled(TextField)(({ theme }) => ({

    '& .MuiOutlinedInput-root': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    
      width: '100%',
     
      '& fieldset': {
        border: 'none',
      },
      '&:hover fieldset': {
        border: 'none',
      },
      '&.Mui-focused fieldset': {
        border: 'none',
      },
    },
  
  }));


export const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor: "rgba(255, 255, 255, 0.12)",
    '&:hover': {
      backgroundColor: "rgba(255, 255, 255, 0.3)",
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    borderRadius:"10px",
    
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));


export const Slash = styled('div')(({ theme }) => ({
    position: 'absolute',
    borderRadius:"5px",
    backgroundColor:"black",
    right:10,
    top:7,
    textAlign:"center",
    height:"70%",
    width:"10%",
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
    }));
  
export  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
export  const StyledInputBase = styled(InputBase)(({ theme }) => ({
     color:"white",
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      
      
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));
  
