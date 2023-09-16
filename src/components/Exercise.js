import React, { useEffect, useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import ExerciseCard from './ExerciseCard';
import {Pagination} from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/fetchData';


const Exercise = ({exercise ,setBodyPart,setExercises,bodypart}) => {
  console.log(exercise,"exercise");
  console.log(bodypart,"BODYPART");
   useEffect(()=>{
    const fetchExerciseData = async()=>{
    let exerciseData= [] ;
    if(bodypart=='all'){
     exerciseData= await fetchData ('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions)
    }
    else{
     exerciseData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodypart}`,exerciseOptions)
    }
    setExercises(exerciseData)
    }
  fetchExerciseData();
  },[bodypart])

  //  paginate changes 

  const[currentPage,setCurrentPage]= useState(1);
  const exercisePerPage = 9 ;
  const indexOfLastExercise = currentPage * exercisePerPage ;
  const indexOfFirstExercise = indexOfLastExercise - exercisePerPage ;
  const CurrentExercise = exercise.slice(indexOfFirstExercise , indexOfLastExercise )
  const paginate = (e ,value)=>{
  setCurrentPage(value)
  window.scrollTo({top:1800,behavior:'smooth'}) 
  }
  return (
   <Box id="exercises" mt="50px" p="20px" sx={{mt:{lg:'110px'}}}>
    <Typography  variant='h3' mb="46px" className='showing-title'>
      Showing Results 
    </Typography>
    <Stack   direction="row" sx={{gap:{lg:"110px",xs:'50px'}}} flexWrap="wrap" justifyContent="center">
     {CurrentExercise.map((exerciseone ,index)=>(
     <ExerciseCard   key={index}  exerciseone={exerciseone}/>
     ))}
    </Stack>
    <Stack mt="100px" alignItems="center">
      {exercise.length > 9 && 
      <Pagination 
      color="standard"
      shape="rounded"
      defaultPage={1}
      count={Math.ceil(exercise.length/exercisePerPage)}
      page={currentPage}
      onChange={paginate}
      size="large"
      />
      }
    </Stack>
  </Box>
  )
}

export default Exercise