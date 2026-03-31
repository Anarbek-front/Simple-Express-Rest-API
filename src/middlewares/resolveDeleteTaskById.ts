import type { NextFunction, Request, Response } from 'express'
import { tasks } from '../data.ts'

type TaskParams = {
    id: string
}

export const resolveDeleteTaskById = (
    req: Request<TaskParams>,
    res: Response,
    next: NextFunction,
) => {
    const taskId = parseInt(req.params.id, 10)
    const taskIndex = tasks.findIndex((t) => t.id === taskId)

    if (taskIndex === -1)
        return res.status(404).json({ error: 'Task Not Found' })

    tasks.splice(taskIndex, 1)
    req.taskId = taskId
    next()
}
