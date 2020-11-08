import React from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import NavBar from './components/NavBar'
import QueryGenerater from './components/QueryGenerater'
import InfoTiles from "./components/InfoTiles";
import MyGraph from "./components/MyGraph"

function App() {

  return (
    <React.Fragment>
      <NavBar />
      <Container fixed >
        <QueryGenerater />
        <InfoTiles />
        <MyGraph/>
      </Container>
    </React.Fragment>
  )
}

export default App;
