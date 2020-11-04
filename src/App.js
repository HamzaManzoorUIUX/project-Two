import React, { useEffect } from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import NavBar from './components/NavBar'
import QueryGenerater from './components/QueryGenerater'
import InfoTiles from "./components/InfoTiles";


function App() {
  
  return (
    <React.Fragment>
      <NavBar />
      <Container fixed >
        <QueryGenerater/>
<InfoTiles/>
      </Container>
    </React.Fragment>
  )
}

export default App;
