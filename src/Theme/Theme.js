import { createTheme, ThemeProvider, alpha,
  getContrastRatio } from '@mui/material/styles';


  // const violetBase = '#7F00FF';
  // const violetMain = alpha(violetBase, 0.7);

 export const customeColours = {
    main:'#7F00FF',
    gradient: "linear-gradient(to bottom, #5F56CB, #F9BE78)",
    gradient1: "linear-gradient(to right, #5F56CB, #F9BE78)"
  }

export const customeTheme = createTheme({

  palette: {
    primary: { main: customeColours.main },
  },

    // components: {
    //       MuiButton: {
    //         styleOverrides: {
    //           root:{
    //             backgroundImage: "linear-gradient(to bottom, black, grey)"
    //           },
    //         },
    //       },
    //     },

  });



   // palette: {
  //   violet: {
  //     main: violetMain,
  //     light: alpha(violetBase, 0.5),
  //     dark: alpha(violetBase, 0.9),
  //     contrastText: getContrastRatio(violetMain, '#fff') > 4.5 ? '#fff' : '#111',
  //   },
  // },