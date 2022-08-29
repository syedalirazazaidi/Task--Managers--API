import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import '../App.css'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import { useSelector } from 'react-redux'
import TaskItem from './taskItem'
export default function TaskCard() {
  const { tasks } = useSelector((state) => state.tasks)

  return (
    // <Card
    //   style={{ backgroundColor: '#FFFFFF', width: 483, height: 65, margin: 10 }}
    // >
    <>
      {tasks && tasks.length > 0 ? (
        <div>
          {tasks.map((task) => (
            <TaskItem
               key={task._id}
               alltask={task}
            />
          ))}
        </div>
      ) : (
        <h3>You have not set any tasks</h3>
      )}
      </>
      
    // </Card>
    // <Card style={{ backgroundColor: '#FFFFFF', width: 483, height: 65,margin:10 }}>
    //   <CardContent></CardContent>
    //   <div style={{display:'flex',justifyContent:'end', alignItems:'center',marginRight:42,marginTop:-10}}>
    //     <DeleteIcon color="primary" />{" "}
    //     <EditIcon color="primary" />
    //   </div>
    // </Card>
  )
}
