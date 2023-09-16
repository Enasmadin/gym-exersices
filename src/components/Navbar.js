import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../images/nav/Logo.png";
import {Stack} from '@mui/system';


const Navbar = () => {
  return (
 <Stack direction="row" justifyContent="space-around" sx={{gap:{sm:'122px' ,xs:'5px'} ,mt:{sm:'32px' ,xs:'20px'} ,justifyContent:"none"}}  px="20px" >
  <Link  to="/">
    <img  src={Logo} alt="logo"  style={{width:"48px" ,height:"48px",margin:'0 20px'}}/>
 </Link>
 <Stack direction ='row'  fontSize="24px" alignItems="flex-end" sx={{gap:{sm:'40px' ,xs:'5px'} }} >
 <Link  to="/" style={{textDecoration:'none', color:"#3A1212" ,borderBottom:"2px solid #ff2625"}}>
    Home 
 </Link>
  <a  href='#experience' style={{textDecoration:'none' ,color:"#3A1212"}}>
   Exersices
  </a> 
 </Stack>
 </Stack>
  )
}

export default Navbar