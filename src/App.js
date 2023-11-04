
import './App.css';
import  Feed  from './components/Feed';
import Navbar from './components/Navbar';
import Rightbar from './components/Rightbar';
import Sidebar from './components/Sidebar';

import { Box , Stack } from '@mui/material';
function App() {
  return (
    <Box >
      <Stack direction="row" spacing={2} justifyContent="center" >
        <Navbar></Navbar>

      </Stack>
    </Box>
  );
}

export default App;
