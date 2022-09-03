// const asyncHandler = require("express-async-handler");
const asyncWrapper = require('../middleware/async')
const { createCustomError } = require('../errors/custom_error')
const Task = require('../models/task')
const getTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({})
  res.status(200).json({ tasks })
})
const createTask = asyncWrapper(async (req, res) => {


  if (!req.body.task) {
    res.status(400)
    throw new Error('Please add a text field')
  }
  const task = await Task.create({
    task: req.body.task,
  })

  res.status(200).json(task)
})

const getTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params
  const task = await Task.findOne({ _id: taskID })
  if (!task) {
    return next(createCustomError(`No task with id : ${taskID}`, 404))
  }
  res.status(200).json({ task })
})
const updateTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params
  const task = await Task.findByIdAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  })
  if (!task) {
    return next(createCustomError(`No task with id : ${taskID}`, 404))
  }
  res.status(200).json({ task })
})
const deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params

  const task = await Task.findOneAndDelete({ _id: taskID })
  if (!task) {
    return next(createCustomError(`No task with id : ${taskID}`, 404))
  }
  res.status(200).json({ task })
})

module.exports = {
  getTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
}
