import React from 'react';
import {Box,Stack,Typography,Button } from '@mui/material';
import homePaner from "../images/home/banner.png"

const Heropaner = () => {
  return (
    <Box sx={{mt:{lg:'120px',xs:'70px'},ml:{sm:'50px'}}} position="relative" p="20px">
      <Typography color="#FF2625" fontWeight="600" fontSize="26px">
         Fittness Club 
      </Typography>
      <Typography fontWeight={700} sx={{fontSize:{lg:"44px" ,xs:"40px"}}} mb="23px" mt="30px">
        Sweet,Smile <br/> and Repeat 
      </Typography>
      <Typography fontSize="22px" mb={2} lineHeight="35px">
      check out the most effective exercise 
      </Typography>
      <img  src={homePaner} alt="homePaner" className='hero-banner-img'/>
      <Button  className='explor-button'  href='#exercise' sx={{backgroundColor:"#ff2625" ,padding:' 10px 20px' ,color:"white"}}>
       Explor Exercise 
      </Button>
      <Typography fontWeight={600} color="#ff2625" sx={{opacity:0.1 ,display:{lg :"block" ,xs:"none"}}} fontSize={200} >
        Exercise
      </Typography>
    </Box>
  )
}

export default Heropaner