import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Alert  } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import '../App.css'
import TaskCard from '../components/taskCard'
import { createTask } from '../features/tasks/taskSlice'
export default function Dashboard() {
  const dispatch = useDispatch()
  const [task, setTask] = React.useState('')
  const [isAlertVisible, setIsAlertVisible] = React.useState(false);
  const { taskSuccess } = useSelector((state) => state.tasks)


  const onSubmit = (e) => {
    setIsAlertVisible(true);
    e.preventDefault()
    dispatch(createTask({ task }))
    setTask('')
    setTimeout(() => {
      setIsAlertVisible(false);
    }, 2000);
  }
  return (
    <>
      <form onSubmit={onSubmit}>
        <Card
          sx={{ maxWidth: 745 }}
          style={{ backgroundColor: '#FFFFFF', padding: '25px', marginTop: 20 }}
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
          {isAlertVisible &&
            <Alert severity="success">Success, Task Added...</Alert>
          }
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </Card>
        <TaskCard />
      </form>
    </>
  )
}
