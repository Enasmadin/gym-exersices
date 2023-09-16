
import React from 'react'
import { Link } from 'react-router-dom'
import { Box ,Button,Stack,Typography } from '@mui/material'


const ExerciseCard = ({exerciseone}) => {
  return (
    <Link   className='exercise-card' to={`/exercise/${exerciseone.id}`}>
      <img    src={exerciseone.gifUrl}  alt=""  loading="lazy"/>
      <Stack   sx={{ flexDirection: {lg:'row' ,xs:'column' } }}>
       <Button sx={{ml:'21px' , color:"#fff",background:"#ffa9a9" ,fontSize:{lg:"14px" } ,borderRadius:"20px" ,textTransform:"capitalize" ,marginBottom:{lg:'0' ,xs:"10px"}}}> 
       {exerciseone.bodyPart}
       </Button>
       <Button sx={{ml:'21px' , color:"#fff",background:"#ffc757" ,fontSize:{lg:"14px" } ,borderRadius:"20px" ,textTransform:"capitalize" }}> 
       {exerciseone.target}
       </Button>
      </Stack>
      <Typography ml="21px" color="#000" fontWeight="bold" mt="11px" textTransform="capitalize"  pb="10px">
         {exerciseone.name}
       </Typography>
    </Link>
  )
}

export default ExerciseCard