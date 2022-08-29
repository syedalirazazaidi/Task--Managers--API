import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import Button from '@mui/material/Button';
import '../App.css'
export default function Dashboard() {
  return (
    <Card sx={{ maxWidth: 445 }} style={{ backgroundColor: '#FFFFFF', padding: '25px' }}  >

      <CardContent >
        <Typography gutterBottom variant="h5" >
          Task Manager
        </Typography>
        <input placeholder="e.g. add the tasks"
          className='textInput'
          type="text"
        />

      </CardContent>
      <Button variant="contained">Submit</Button>
     
    </Card>
  );
}



