import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <h1>React Form Exercise</h1>
    </ThemeProvider>
  );
}

export default App;
