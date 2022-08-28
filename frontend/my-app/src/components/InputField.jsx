import * as React from 'react';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './text.css'
export default function TextInput() {
  return (
    <div style={{backgroundColor:'red'}}
   className='textContainer'
    >
      <TextField  placeholder='enter the text' variant="outlined"  className='textField'/>
     
      <Button variant="contained">Contained</Button>

    </div>
  );
}