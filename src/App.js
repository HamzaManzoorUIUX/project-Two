import React, { useEffect } from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

function App() {
  useEffect(() => {
    async function getData() {
      const response = await fetch("https://rapidapi.p.rapidapi.com/help/countries", {
        "method": "GET",
        "headers": {
          "x-rapidapi-key": "008e546fa2msh8fb244dc4dc123ep10bd52jsn5656e1b6379c",
          "x-rapidapi-host": "covid-19-data.p.rapidapi.com"
        }
      })
      let data=await response.json()

      console.log(data);
    }
    getData()
  }, [])
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed >
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
      </Container>
    </React.Fragment>
  )
}

export default App;
