import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { useSelector, useDispatch } from 'react-redux'
import '../App.css'
import TaskCard from '../components/taskCard'
import { createTask } from '../features/tasks/taskSlice'
export default function Dashboard() {
  const dispatch = useDispatch()
  const [task, setTask] = React.useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(task)
    dispatch(createTask({ task }))
    setTask('')
  }

  console.log(task, 'TASKK')
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
              onChange={(e) => setTask(e.target.value)}
            />
          </CardContent>
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </Card>
        <TaskCard />
      </form>
    </>
  )
}
