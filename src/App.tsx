import './App.css';
import { Button, Typography, Rating, Box } from '@mui/material';
import { useState } from 'react';
import '@fontsource/roboto/300.css';

function App() {
  const [count, setCount] = useState(0)
  const [value, setValue] = useState<number | null>(2)
  return (

    
    <Box>
      <Typography variant='h1' fontWeight='600'>React x TypeScript</Typography>
      <Button variant='contained' onClick={()=>setCount(count+1)}>{count}</Button>
      <br />

      <Typography variant='h2' fontWeight='500'>Star Rating</Typography>
      <Typography variant='h3'>Star Rating</Typography>
      <Rating name='star'></Rating>
      <Typography variant='h3'>Taking value out</Typography>
      <Rating name='output' value={value} onChange={(event, newValue) => {setValue(newValue);}}></Rating>
      <Typography variant='staroutput'></Typography>
    </Box>
  );
}

export default App;
