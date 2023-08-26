import { createTheme, ThemeOptions } from "@mui/material";

const themeOptions: ThemeOptions = {
    palette: {
       primary: {
        main: '#1976d3',
    },
    secondary: {
        main: '#dc004e'
    }
  },
  typography: {
    fontFamily: '"Roboto", "Arial", sans-serif'
  },
  spacing: 8,
  components: {
    MuiCssBaseline: {
        styleOverrides: {
            html: {
                WebkitFontSmoothing: 'auto',
            },
            body: {
                margin: 0,
                padding: 0,
                fontFamily: '"Roboto", "Arial", sans-serif',
                backgroundColor: '#f4f6f8',
            },
            a: {
                textDecoration: 'none',
                color: 'inherit',
            },
            '*': {
                boxSizing: 'border-box',
            },
        }
    }
  },
  breakpoints: {
    values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
    }
  }
};

const theme = createTheme(themeOptions);

export default theme;
