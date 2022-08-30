import React from 'react'
import Card from '@mui/material/Card'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import CardContent from '@mui/material/CardContent'
import { useDispatch } from 'react-redux'
import { deleteTask, getTasks } from '../features/tasks/taskSlice'
const TaskItem = ({ alltask }) => {
  const { task, _id } = alltask.task
 
  const dispatch = useDispatch()
//   React.useEffect(() => {
//     dispatch(getTasks())
//  }, [dispatch])
  return (
    <Card
      style={{ backgroundColor: '#FFFFFF', width: 483, height: 65, margin: 10 }}
    >
      <CardContent>{task}</CardContent>
      <div
        style={{
          display: 'flex',
          justifyContent: 'end',
          alignItems: 'center',
          marginRight: 42,
          marginTop: -10,
        }}
      >
        <DeleteIcon
          color="primary"
          onClick={() => dispatch(deleteTask(_id))}
          style={{ cursor: 'pointer' }}
        />
        <EditIcon color="primary" style={{ cursor: 'pointer' }} />
      </div>
    </Card>
  )
}

export default TaskItem
