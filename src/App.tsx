import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import CustomAppBar from './Components/AppBar';
import Router from "./Router";
import lightTheme from './Theme/lightTheme';
import darkTheme from './Theme/darkTheme';

function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={darkTheme}>
        <Router>
          <CustomAppBar />
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
