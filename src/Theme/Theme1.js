import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import { customeColours } from './Theme';

// #5F56CB
// #F9BE78

export const Mytheme = styled(Box)({
   
    backgroundColor:"#EBECF1",
    ".MuiButton-contained" : {
        background: customeColours.gradient

    } ,

   ".cusdiv":{
    background: customeColours.gradient,
    borderRadius:"5px"
   }

  });