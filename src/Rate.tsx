import { Button, Typography, Rating, Box } from '@mui/material'
import { useState } from 'react'

function Rate(){
    const [value, setValue] = useState<number | null>(2)
    return (
        <Box textAlign='left' sx={{p:1, border:'2px dashed black'}}>
            <Typography variant='h3' sx={{m:2,p:2,display:'inline-block'}}>
                Star Rating
            </Typography>
            <Rating name='star'></Rating>
            <br />
            <Rating name='output' value={value} sx={{m:2,p:1,}} onChange={(event, newValue) => {setValue(newValue);}}></Rating>
            <Typography variant='h3' sx={{m:2,p:1}} >Output : {value}</Typography>
        </Box>        
    )
}

export default Rate;