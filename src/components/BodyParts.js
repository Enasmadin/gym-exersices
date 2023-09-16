import React from 'react';
import {Stack, stack,Typography} from "@mui/material";
 import Icon from "../images/icon/gym.png"
;
const BodyParts = ({ item , bodypart, setBodyPart }) => {

const handleButtonClick = () => {
setBodyPart(item);
window.scrollTo({top:1800,left:100, behavior:"smooth"});
console.log(bodypart,"bodypartimportanet")
};
  return (
    <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    
    sx={{
        borderTop: bodypart === item ?'2px solid #ff2625 !important' : '',
        background: "#fff",
        borderBottomLeftRadius: '20px',
        width: '270px',
        height: '280px',
        cursor: "pointer",
        gap: '47px'
      }}
      onClick={handleButtonClick}
    >
       <img   src={Icon} alt="dumbl" style={{width:"40px" , height:'40px'}}/>
       <Typography   fontSize="24px" fontWeight="bold" color="#3A1212" textTransform="capitalize">
          {item}
       </Typography>
    </Stack>
  )
}

export default BodyParts