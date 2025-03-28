import express from 'express'
import { TASKS } from '../../dummy'

const tasks = express.Router({ mergeParams: true })

tasks.get('/tasks', (_req, res) => {
    res.json(TASKS)
})
tasks.get('/task/:taskId', (req, res) => {
    console.log(req.params.taskId)
    res.json(TASKS)
})
tasks.post('/tasks', (_req, res) => {
    res.send("Post Tasks")
})
tasks.post('/tasks:taskId', (req, res) => {
    res.send(`Post task id ${req.params.taskId}`)
})

export default tasks
