import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import taskService from './taskService'

const initialState = {
  tasks: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}
// Create new task

export const createTask = createAsyncThunk(
  'tasks/create',
  async (taskData, thunkAPI) => {
    try {
      return await taskService.createTask(taskData);
      
    } catch (error) {
      console.log(error)
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  },
)

// Delete user task
export const deleteTask = createAsyncThunk(
  'task/delete',
  async (id, thunkAPI) => {
    try {
      return await taskService.deleteTask(id)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  },
)
// Get user goals
export const getTasks = createAsyncThunk(
  'tasks/gettasks',
  async (_, thunkAPI) => {
    try {
      const datAll = await taskService.getTasks()
      return datAll
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  },
)

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createTask.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createTask.fulfilled, (state, action) => {
        const obj=action.payload
        console.log(obj)
        state.isLoading = false
        state.isSuccess = true
        state.tasks.push(obj)
      })
      .addCase(createTask.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(deleteTask.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.tasks = state.tasks.filter(
          (task) => task._id !== action.payload.task._id,
        )
      })
      .addCase(deleteTask.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      // .addCase(getTasks.pending, (state) => {
      //   state.isLoading = true
      // })
      // .addCase(getTasks.fulfilled, (state, { payload }) => {
      //   state.isLoading = false
      //   state.isSuccess = true
      //   state.tasks = payload
      // })
      // .addCase(getTasks.rejected, (state, action) => {
      //   state.isLoading = false
      //   state.isError = true
      //   state.message = action.payload
      // })
  },
})

export const { reset } = taskSlice.actions
export default taskSlice.reducer
