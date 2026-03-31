import type { NextFunction, Request, Response } from 'express'
import { tasks } from '../data.ts'

export type TaskParams = {
    id: string
}

export const resolveCreateTask = (
    req: Request<TaskParams>,
    res: Response,
    next: NextFunction,
) => {
    const title = req.body.title

    const newTask = { id: tasks.length + 1, title }

    tasks.push(newTask)

    req.newTask = newTask

    console.log(newTask)

    next()
}
