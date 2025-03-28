import express, { Request, Response } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
//import { router } from './api/routes'
import router from './api/routes'
dotenv.config()

const app = express()
app.use(cors())
const PORT = process.env.PORT || 8000

app.get('/', (_req, res) => {
    res.send("<h1>Server Running</h1>")
})
app.use('/api', router)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
