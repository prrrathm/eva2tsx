import './App.css';
import { Button } from '@mui/material';
import { useState } from 'react';


function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <h1>React and TypeScript Learn.</h1>
      <Button variant='contained' onClick={()=>setCount(count+1)}>{count}</Button>

    </div>
  );
}

export default App;
