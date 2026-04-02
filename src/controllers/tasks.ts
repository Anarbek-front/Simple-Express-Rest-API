import type { Request, Response } from 'express'
import { completedTasks, tasks } from '../data.ts'

type TaskParams = {
    id: string
}

export const getAllTasks = (req: Request, res: Response) => {
    res.cookie('say', 'my', { maxAge: 6000, signed: true })
    console.log(req.headers.cookie)
    console.log(req.cookies)
    console.log(req.signedCookies)
    if (req.signedCookies.say && req.signedCookies.say === 'my') {
        return res.json({ data: tasks })
    }
    return res.send({ msg: 'Sorry. You need the correct cookie' })
}

export const getAllCompleteTask = (req: Request, res: Response) =>
    res.json({ data: completedTasks })

export const getTaskById = (req: Request<TaskParams>, res: Response) => {
    const { findTask } = req
    res.json({
        data: findTask,
    })
}

export const createNewTask = (req: Request, res: Response) => {
    res.json({ data: req.newTask })
}

export const createTask = (req: Request, res: Response) => {
    const newTask = {
        id: Date.now(),
        title: req.body.title.trim(),
        completed: req.body.completed,
    }
    completedTasks.push(newTask)
    res.status(201).json({ data: newTask })
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
