import express from 'express'
import tasksRouter from './routes/tasks.ts'

const app = express()
const PORT = 3000

app.use(express.json())

app.use('/tasks', tasksRouter)

app.use((req, res) => {
    res.status(404).json({ error: 'Nothing found' })
})

app.listen(PORT, () => {
    console.log(`Listen localhost ${PORT}`)
})
