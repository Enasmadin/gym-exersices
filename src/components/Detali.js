import React from 'react';
import { Stack ,Typography,Button } from '@mui/material';

const Detali = ({exercisedetail}) => {
console.log(exercisedetail,"exerciseDetail567")
 const {bodyPart ,gifUrl,name,target,equipment} = exercisedetail;
  return (
   <Stack   gap="60px" sx={{flexDirection:{lg:"row"}, p:'20px', alignItems:"center"}}>
    <img   src={gifUrl} alt={name}  loading='lazy' className='detali-image'/> 
    <Typography>
        {exercisedetail.name}
    </Typography>
   </Stack>
  )
}

export default Detali