import React , { useContext, useState } from 'react';
import {Box,Button,Stack,TextField,Typography } from "@mui/material";
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import BodyParts from './BodyParts';
import RightArrowIcon from '../images/icon/right-arrow.png';
import LeftArrowIcon from '../images/icon/left-arrow.png';

const HorizantelScroll = ({data,bodypart,setBodyPart }) => {

  const LeftArrow = () => {
    const { scrollPrev ,isFirstItemVisible } = useContext(VisibilityContext);
    return (
      <Typography  disabled={isFirstItemVisible}  onClick={() => scrollPrev()} className="right-arrow">
        <img src={LeftArrowIcon} alt="right-arrow" />
      </Typography>
    );
};


const RightArrow = () => {
  const { scrollNext ,isLastItemVisible } = useContext(VisibilityContext);
  return (
    <Typography  disabled={isLastItemVisible} onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};
 
 



return(
  <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} >
    {data.map((item)=>(
     <Box 
      key={item.id || item}
      itemID={item.id || item}
      title={item.id || item}
      m="0 40px">
     <BodyParts   item={item}  bodypart={bodypart} setBodyPart ={setBodyPart  }/>
     </Box>   
    ))}
 </ScrollMenu>
  )
}

export default HorizantelScroll