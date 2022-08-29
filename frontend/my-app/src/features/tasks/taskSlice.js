import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import taskService from "./taskService";

const initialState = {
     tasks: [],
//   isError: false,
//   isSuccess: false,
//   isLoading: false,
//   message: "",
};

// Create new task

export const createTask = createAsyncThunk(
    "tasks/create",
    async (taskData, thunkAPI) => {
      try {
        return await taskService.createTask(taskData);
      } catch (error) {
        console.log(error);
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        return thunkAPI.rejectWithValue(message);
      }
    }
  );

  export const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
      reset: (state) => initialState,
    },
    extraReducers: (builder) => {
      builder
        .addCase(createTask.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(createTask.fulfilled, (state, action) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.tasks.push(action.payload);
        })
        .addCase(createTask.rejected, (state, action) => {
          state.isLoading = false;
          state.isError = true;
          state.message = action.payload;
        })
    },
  });

export const { reset } = taskSlice.actions;
export default taskSlice.reducer;
  