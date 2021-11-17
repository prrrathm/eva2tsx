import './App.css';
import { Button, Typography, Box } from '@mui/material';
import { useState, useEffect } from 'react';
import "@fontsource/abeezee"
// import '@fontsource/roboto/300.css';
// import Rate from './Rate'

function App() {

  const [name, setName] = useState({title : '', first : '', last : ''})
  const fetchData = async () =>{
    const randData = await fetch('https://randomuser.me/api/')
    const json = await randData.json()
    setName( json.results[0].name)
  }

  useEffect(() => {
    fetchData();
  }, []);

  // const rand = useFetch("https://randomuser.me/api/")
  const [count, setCount] = useState(0)
  return (
    <Box sx={{fontFamily:'ABeeZee',textAlign:'center',}}>
      {/* <Typography variant='h1' fontWeight='600'>React x TypeScript</Typography>
      <br /> */}
      <Typography variant='h2' sx={{color:'grey'}}>
        Name : { name.title + ' ' + name.first + ' ' + name.last}
      </Typography>
    </Box>
  );
}

export default App;
