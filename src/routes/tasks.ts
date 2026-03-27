import express from 'express'
import {
    createNewTask,
    deleteTaskById,
    editTaskById,
    getAllTasks,
    getTaskById,
} from '../controllers/tasks.ts'

const router = express.Router()

// router.get('/', (req, res) => {
//     console.log(req.query)
//     res.json({ message: 'Nodaaaa' })
// })

router.get('/', getAllTasks)

router.get('/:id', getTaskById)

router.post('/', createNewTask)

router.put('/:id', editTaskById)

router.delete('/:id', deleteTaskById)

export default router