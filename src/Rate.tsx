import { Button, Typography, Rating, Box } from '@mui/material';
import { useState } from 'react';

function Rate(){
    return (
        const [value, setValue] = useState<number | null>(2)
        <Box>
            <Typography variant='h2' fontWeight='500'>Star Rating</Typography>
            <Typography variant='h3'>Star Rating</Typography>
            <Rating name='star'></Rating>
            <Typography variant='h3'>Taking value out</Typography>
            <Rating name='output' value={value} onChange={(event, newValue) => {setValue(newValue);}}></Rating>
            <Typography variant='h3'>Output</Typography>
        </Box>        
    )
}

export default Rate