import React, { useEffect } from 'react'
import '../App.css'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import CardContent from '@mui/material/CardContent'
import { Card, CircularProgress } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";

import TaskItem from './taskItem'
import { getTasks, deleteTask } from '../features/tasks/taskSlice'

function TaskCard({task,setTask}) {

  const dispatch = useDispatch()
  const navigate = useNavigate();
  const { tasks, isError, message, isLoading } = useSelector(
    (state) => state.tasks,
  )
  console.log(tasks,"taskCARD")
  // const newtask = task._id ? tasks.find((g) => g._id === task._id) : null;
  // console.log(newtask,"newTASKKK")
  useEffect(() => {
    if (isError) {
      console.log(message, 'MESSAGE')
    }
    dispatch(getTasks())
  }, [dispatch, isError])

  const EditTask = (task) => {
    navigate("/editTask",{ state: { task } });
  }
  if (isLoading) {
    return <CircularProgress size={24} color="secondary" />
  }
  return (
    <div>
      {tasks && tasks.length > 0 ? (
        tasks.map((task) => {
          return (
            <Card
              style={{
                backgroundColor: '#FFFFFF',
                width: 483,
                height: 65,
                margin: 10,
              }}
              key={task._id}
            >
              <CardContent>{task.task}</CardContent>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'end',
                  alignItems: 'center',
                  marginRight: 42,
                  marginTop: -38,
                }}
              >
                <DeleteIcon
                  color="primary"
                  onClick={() => dispatch(deleteTask(task._id))}
                  style={{ cursor: 'pointer' }}
                />
                <EditIcon
                  color="primary"
                  style={{ cursor: 'pointer' }}
                  onClick={()=>EditTask(task)}
                />
              </div>
            </Card>
          )
        })
      ) : (
        <h3>You have not set any tasks</h3>
      )}
    </div>
  )
}

export default TaskCard
