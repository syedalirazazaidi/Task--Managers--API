import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import '../App.css'
export default function Dashboard() {
  return (
    <Card sx={{ maxWidth: 445 }} style={{ backgroundColor: '#FFFFFF', padding: '25px' }}  >

      <CardContent >
        <Typography gutterBottom variant="h5" >
          Task Manager
        </Typography>
        <input placeholder="e.g. add todos"
          className='textInput'
          type="text"
        />

      </CardContent>
     
    </Card>
  );
}



