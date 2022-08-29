import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
const TaskItem = ({alltask}) => {
    const {task,_id}=alltask.task
    
  return (
    
   
     <Card style={{ backgroundColor: '#FFFFFF', width: 483, height: 65,margin:10 }}>
       <CardContent>{task}</CardContent>
      <div style={{display:'flex',justifyContent:'end', alignItems:'center',marginRight:42,marginTop:-10}}>
         {/* <DeleteIcon color="primary" />
        <EditIcon color="primary" />  */}
      </div>
     </Card>
  )
}

 // <Card style={{ backgroundColor: '#FFFFFF', width: 483, height: 65,margin:10 }}>
    //   <CardContent></CardContent>
    //   <div style={{display:'flex',justifyContent:'end', alignItems:'center',marginRight:42,marginTop:-10}}>
    //     <DeleteIcon color="primary" />{" "}
    //     <EditIcon color="primary" />
    //   </div>
    // </Card>


export default TaskItem