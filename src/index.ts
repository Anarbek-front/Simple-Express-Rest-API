import express from 'express'
import cookieParser from 'cookie-parser'
import session from 'express-session'
import routes from './routes/index.ts'

const app = express()
const PORT = 3000

app.use(express.json())
app.use(cookieParser('sayMyName'))
app.use(
    session({
        secret: 'the dev',
        saveUninitialized: false,
        resave: false,
        cookie: {
            maxAge: 60000 * 60,
        },
    }),
)
app.use(routes)

app.use((req, res) => {
    res.status(404).json({ error: 'Nothing found' })
})

app.listen(PORT, () => {
    console.log(`Listen localhost ${PORT}`)
})
