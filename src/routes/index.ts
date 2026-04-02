import { Router } from 'express'
import tasksRouter from './tasks.ts'
import userRouter from './user.ts'

const router = Router()

router.use('/tasks', tasksRouter)
router.use('/user', userRouter)

export default router
