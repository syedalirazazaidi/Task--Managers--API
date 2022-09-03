import axios from 'axios'

const API_URL = '/api/tasks/'

// Create new Task
const createTask = async (taskData) => {
  const response = await axios.post(API_URL, taskData)
  return response.data
}
// Update new Task
const updateTask = async (edittext) => {
  
  const { task,_id,  } = edittext;
  const response = await axios.patch(API_URL+_id, {task} );
  
  // API_URL + currentId
  return response.data;
};


// Delete user task
const deleteTask = async (taskId) => {
  const response = await axios.delete(API_URL + taskId)
  return response.data
}

// Get user tasks
const getTasks = async () => {
  const response = await axios.get(API_URL)
  return response.data
}

const taskService = {
  createTask,
  deleteTask,
  getTasks,
  updateTask
}
export default taskService
