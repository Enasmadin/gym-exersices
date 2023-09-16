import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import { Details } from '@mui/icons-material';
import ExerciseVideo from '../components/ExerciseVideo';
import { SimilarExersice } from '../components/SimilarExersice';


const ExerciseDetali = () => {
const [exercisedetail, setExerciseDetail] = useState({});
const {id} = useParams();
 
useEffect(()=>{
const FetchExerciseData = async()=>{
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';
      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
      setExerciseDetail(exerciseDetailData);
      console.log(exercisedetail,"exerciseDetailData")
}
FetchExerciseData()
},[id])


  return (
   <Box>
    <Details exercisedetail={exercisedetail} />
    <ExerciseVideo/>
    <SimilarExersice/>
   </Box>
  )
}

export default ExerciseDetali