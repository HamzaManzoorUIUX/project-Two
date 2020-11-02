import React,{ useEffect } from 'react';
import './App.css';
import MyButton from './components/MyButton'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import MyGrid from './components/MyGrid';

function App() {
  // useEffect(()=>{
  //   fetch("https://covid-19-data.p.rapidapi.com/help/countries?format=json", {
  //     "method": "GET",
  //     "headers": {
  //       "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
  //       "x-rapidapi-key": "008e546fa2msh8fb244dc4dc123ep10bd52jsn5656e1b6379c"
  //     }
  //   })
  //   .then(response => {
  //     return response.json()
  //   }).then(json=>console.log(json))
  //   .catch(err => {
  //     console.log(err);
  //   });
  // },[])
  return (
    <React.Fragment>
     <CssBaseline />
      <Container fixed >
      <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
     </Container>
     <MyGrid/>
     </React.Fragment>
    )
}

export default App;
