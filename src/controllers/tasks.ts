import type { Request, Response } from 'express'
import { tasks } from '../data.ts'

type TaskParams = {
    id: string
}

export const getAllTasks = (req: Request, res: Response) => {
    res.json({ data: tasks })
}

export const getTaskById = (req: Request<TaskParams>, res: Response) => {
    const { findTask } = req
    res.json({
        data: findTask,
    })
}

export const createNewTask = (req: Request, res: Response) => {
    res.json({ data: req.newTask })
}

export const editTaskById = (req: Request<TaskParams>, res: Response) => {
    const { taskIndex } = req
    if (taskIndex === undefined)
        return res.status(500).json({ error: 'taskIndex was not resolved' })
    tasks[taskIndex].title = req.body.title
    res.json(tasks[taskIndex])
}

export const deleteTaskById = (req: Request<TaskParams>, res: Response) => {
    const { taskId } = req
    return res.status(204).json({ data: { id: taskId } })
}
