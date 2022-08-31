import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Alert } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import '../App.css'
import TaskCard from '../components/taskCard'
import { createTask } from '../features/tasks/taskSlice'
export default function Dashboard() {
  const dispatch = useDispatch()
  const [task, setTask] = React.useState('')
  const [messageTask, setMessageTask] = React.useState('');
  const { taskSuccess } = useSelector((state) => state.tasks)
  const newDisplayText = () => {
         setTimeout(() => {
         setMessageTask("task completed")
          }, 1000)
  }
  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(createTask({ task }))
    setTask('')
    newDisplayText()
    // sendMessage()
  }
  // {taskSuccess === "success" ? (
  //   <Alert severity="success">Task Added...</Alert>
  // ) : null}

  return (
    <>
      <form onSubmit={onSubmit}>
        <Card
          sx={{ maxWidth: 445 }}
          style={{ backgroundColor: '#FFFFFF', padding: '25px' }}
        >
          <CardContent>
            <Typography gutterBottom variant="h5">
              Task Manager
            </Typography>
            <input
              placeholder="e.g. add the tasks"
              className="textInput"
              type="text"
              value={task}
              required
              onChange={(e) => setTask(e.target.value)}
            />
          </CardContent>
          {messageTask}

          <Button variant="contained" type="submit">
            Submit
          </Button>
        </Card>
        <TaskCard />
      </form>
    </>
  )
}
