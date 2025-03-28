import express from 'express'
import tasks from './tasks/tasks-api'
const router = express.Router()

// define the home page route
router.all('/tasks', tasks)
// define the about route
router.get('/groups', (_req, res) => {
    res.send('Groups api')
})

export default router;
