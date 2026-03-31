import type { Request, Response, NextFunction } from 'express'
import { tasks } from '../data.ts'

export type TaskParams = {
    id: string
}

export const resolveGetTaskById = (
    req: Request<TaskParams>,
    res: Response,
    next: NextFunction,
) => {
    const taskId: number = parseInt(req.params.id, 10)

    const findTask = tasks.find((task) => task.id === taskId)

    findTask
        ? (req.findTask = findTask)
        : res.status(404).json({ error: 'Nothing found' })
    next()
}