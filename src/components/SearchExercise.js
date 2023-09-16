import React, { useEffect, useState } from 'react';
import {Box,Button,Stack,TextField,Typography } from "@mui/material"
import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizantelScroll from './HorizantelScroll';

const SearchExercise = ({ 
  bodypart ,
  setBodyPart,
  setExercises,
   }) => {
  console.log(bodypart ,"ioio")
  const [search,setSearch]=useState("");
  // const [exercise,setExrcise] =useState([]);
  const [bodyPartS, setBodyParts] =useState([]);

  useEffect(()=>{
  const fetchExerciseData = async ()=>{
    const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exerciseOptions);
     setBodyParts(['all', ...bodyPartsData])
    console.log(Array.isArray(bodyPartsData))
    
  }
  fetchExerciseData()
  },[])


  const handelSearch = async()=>{
    if(search){
      const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions);
      console.log(exerciseData ,"exerciseData")
      const searchedExercises = exerciseData.filter(
        (item) => item.name.toLowerCase().includes(search)
               || item.target.toLowerCase().includes(search)
               || item.equipment.toLowerCase().includes(search)
               || item.bodyPart.toLowerCase().includes(search),
      );

      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

      setSearch('');
      setExercises(searchedExercises)
      console.log(searchedExercises ,"exerciseknow")

    }
  }
  return (
    <Stack alignItems="center" justifyContent="center"  mt="37px" sx={{padding:{md:"20px"}}}>
    <Typography   fontWeight={700} sx={{fontSize:{lg:'44px' ,xs:"30px"}}} mb="50px" textAlign="center">
      Awasome  Exersice You <br/>
      Should kNow 
    </Typography>
    <Box  mb="72px" position="relative">
    <TextField 
    sx={{input:
     {fontWeight:'700',
     border:'none',
    },
     width:{lg:'900px'},
     backgroundColor:"#fff",
    
    }}
    height="76px"
    type="text"
    placeholder='Search Exercises'
    value={search}
    onChange={(e)=>setSearch(e.target.value.toLowerCase())}

    />
    <Button  
    sx={{bgcolor:"#FF2625" ,color:"#fff" ,backgroundColor:"#FF2625",
    textTransform:"none",width:{lg:"175px", xs:"80px"} ,
    fontSize:{lg:"20px",xs:"14px"},
    padding:"10px",
    margin:"0px 10px"
  }}
    height="56px"
    position="absolute"
    right="0"
    className='search-btn'
    onClick={handelSearch}> Search </Button>
   </Box>
    <Box  sx={{ position: 'relative', width: '100%', p: '20px' }}>
    <HorizantelScroll   data={bodyPartS} bodypart={bodypart} setExercises={setExercises} setBodyPart ={setBodyPart }/>
   </Box>
   </Stack>

  )
}

export default SearchExercise