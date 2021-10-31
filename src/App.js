import { Grid } from '@mui/material';
import './App.css';
import Header from './components/Header';
import SideBar from './components/SideBar';

function App() {
  return (
    <div className="App">
      <div className="header">
        <Header/>
      </div>
      <div className="container">
        <Grid container>
          <Grid xs={2}>
            <SideBar/>
          </Grid>
          <Grid xs={10}>
  a
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default App;
