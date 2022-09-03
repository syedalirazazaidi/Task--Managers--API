import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import { useDispatch ,useSelector} from 'react-redux'
import Button from '@mui/material/Button'
import ButtonBack from './button'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { updateTask } from '../features/tasks/taskSlice'
const EditTask = () => {
  const navigate = useNavigate()
  const { state } = useLocation()
  const { task } = state
  const { tasks } = useSelector(
    (state) => state.tasks,
  )
  const dispatch = useDispatch()
  const [newTodo, setTodo] = React.useState(task)
  const editTaskhandle = (id) => {
    dispatch(updateTask({ _id: id, task:newTodo }))
    setTodo({
      newTodo: "",
    });
    navigate('/')
   
  }
  
  return (
    <>
      <Card
        style={{
          backgroundColor: '#FFFFFF',
          width: 483,
          height: 305,
          margin: 150,
        }}
      >
        <CardContent>
          Edit Task
          <nav aria-label="secondary mailbox folders">
            <List>
              <ListItem disablePadding style={{ marginTop: 20 }}>
                <ListItemText primary="Text ID" />
               
              </ListItem>
              <ListItem disablePadding style={{ marginTop: 20 }}>
                <ListItemText primary="Name" />
                <div style={{}}>
                  <input
                    type="text"
                    placeholder="e.g:Text"
                    onChange={(e) => setTodo(e.target.value)}
                    value={newTodo.task}
                    style={{
                      border: 'none',
                      padding: 15,
                      paddingRight: 160,
                      backgroundColor: '#f9f9f9',
                      borderRadius: 2,
                    }}
                  />
                </div>
              </ListItem>
              <ListItem disablePadding style={{ marginTop: 20 }}>
                <ListItemText primary="Completed" />
                <FormControlLabel control={<Checkbox defaultChecked />} />
              </ListItem>
              <div style={{ marginTop: 10 }}>
                <Button
                  variant="contained"
                  style={{ width: 450 }}
                  onClick={() => editTaskhandle(task._id)}
                >
                  Edit
                </Button>
              </div>
            </List>
          </nav>
        </CardContent>
      </Card>
      <ButtonBack />
    </>
  )
}

export default EditTask
