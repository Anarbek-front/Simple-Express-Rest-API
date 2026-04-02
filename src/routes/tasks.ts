import express from 'express'
import {
    createNewTask,
    createTask,
    deleteTaskById,
    editTaskById,
    getAllCompleteTask,
    getAllTasks,
    getTaskById,
} from '../controllers/tasks.ts'
import { resolveTaskIndexById } from '../middlewares/resolveTaskIndexById.ts'
import { resolveGetTaskById } from '../middlewares/resolveGetTaskById.ts'
import { resolveCreateTask } from '../middlewares/resolveCreateTask.ts'
import { resolveDeleteTaskById } from '../middlewares/resolveDeleteTaskById.ts'
import { validateCreateTask } from '../validators/validateCreateTask.ts'
import { validate } from '../middlewares/validate.ts'
import { registerUserValidation } from '../validators/user.validator.ts'
import { createNewUser } from '../controllers/users.ts'

const router = express.Router()

router.get('/', getAllTasks)

router.get('/completedTasks', getAllCompleteTask)

router.get('/:id', resolveGetTaskById, getTaskById)

router.post('/', resolveCreateTask, createNewTask)

router.post('/completeTask', validateCreateTask, createTask)

router.put('/:id', resolveTaskIndexById, editTaskById)

router.delete('/:id', resolveDeleteTaskById, deleteTaskById)

router.post('/register', registerUserValidation, validate, createNewUser)

export default router
