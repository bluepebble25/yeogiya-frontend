import { createTheme } from '@mui/material';

export const globalTheme = createTheme({
  typography: {
    fontFamily: 'Nanum Gothic, Roboto, Helvetica, Arial, sans-serif',
  },
  palette: {
    primary: {
      main: '#78A2FF', // 파란색
    },
    secondary: {
      main: '#FF9B3F', // 주황색
    },
  },
});
