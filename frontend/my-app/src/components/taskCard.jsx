import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import '../App.css'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'

export default function TaskCard() {
  return (
    <Card style={{ backgroundColor: '#FFFFFF', width: 483, height: 65,margin:10 }}>
      <CardContent></CardContent>
      <div style={{display:'flex',justifyContent:'end', alignItems:'center',marginRight:42,marginTop:-10}}>
        <DeleteIcon color="primary" />{" "}
        <EditIcon color="primary" />
      </div>
    </Card>
  )
}
