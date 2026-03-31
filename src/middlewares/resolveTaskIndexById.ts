import type { Request, Response, NextFunction } from 'express'
import { tasks } from '../data.ts'

export type TaskParams = {
    id: string
}

export const resolveTaskIndexById = (
    req: Request<TaskParams>,
    res: Response,
    next: NextFunction,
) => {
    const {
        params: { id },
    } = req
    const taskId = parseInt(id, 10)
    const taskIndex = tasks.findIndex((t) => t.id === taskId)

    if (taskIndex === -1)
        return res.status(404).json({ error: 'Task Not found' })

    req.taskIndex = taskIndex
    next()
}
