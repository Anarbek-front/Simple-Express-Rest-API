import express from 'express'
import {
    createNewTask,
    deleteTaskById,
    editTaskById,
    getAllTasks,
    getTaskById,
} from '../controllers/tasks.ts'
import { resolveTaskIndexById } from '../middlewares/resolveTaskIndexById.ts'
import { resolveGetTaskById } from '../middlewares/resolveGetTaskById.ts'
import { resolveCreateTask } from '../middlewares/resolveCreateTask.ts'
import { resolveDeleteTaskById } from '../middlewares/resolveDeleteTaskById.ts'

const app = express()

app.use(express.json())

const router = express.Router()

router.get('/', getAllTasks)

router.get('/:id', resolveGetTaskById, getTaskById)

router.post('/', resolveCreateTask, createNewTask)

router.put('/:id', resolveTaskIndexById, editTaskById)

router.delete('/:id', resolveDeleteTaskById, deleteTaskById)

export default router
