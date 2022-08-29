import axios from 'axios'

const API_URL = '/api/tasks/'

// Create new Task
const createTask = async (taskData) => {
  const response = await axios.post(API_URL, taskData)
  return response.data
}
const taskService = {
  createTask,
}
export default taskService
