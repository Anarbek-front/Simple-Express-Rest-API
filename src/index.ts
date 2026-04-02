import express from 'express'
import routes from './routes/index.ts'
import cookieParser from 'cookie-parser'

const app = express()
const PORT = 3000

app.use(express.json())
app.use(cookieParser('sayMyName'))

app.use(routes)

app.use((req, res) => {
    res.status(404).json({ error: 'Nothing found' })
})

app.listen(PORT, () => {
    console.log(`Listen localhost ${PORT}`)
})
