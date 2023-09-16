import React, { useState } from 'react';
import {Box} from "@mui/system" ;
import Heropaner from '../components/Heropaner';
import SearchExercise from '../components/SearchExercise';
import Exercise from '../components/Exercise';

const Home = () => {
  
  const[bodypart,setBodyPart] =useState('all');
  const [exercise,setExercises]=useState([]);
  console.log(bodypart,"bodypartitem")
  return (
    
    <Box>
      <Heropaner/>
      <SearchExercise
       bodypart={bodypart} 
       setExercises={setExercises}
       setBodyPart={setBodyPart}
       exercise={exercise}
       />
      <Exercise
       bodypart={bodypart}
       setExercises={setExercises}
       setBodyPart={setBodyPart}
       exercise={exercise}
      />   
    </Box>
  )
}

export default Home