import React from 'react'

import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
const ButtonBack = () => {
  const navigate = useNavigate();
  const backButton=()=>{
    navigate('/')

  }
  return (
    <Button variant="contained"  style={{backgroundColor:'black',paddingLeft:25,paddingRight:25}} onClick={backButton}>Back To Tasks</Button>
  )
}

export default ButtonBack