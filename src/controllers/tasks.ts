import type { Request, Response } from 'express'
import { tasks } from '../data.ts'

type TaskParams = {
    id: string
}

export const getAllTasks = (req: Request, res: Response) => {
    res.json({ data: tasks })
}

export const getTaskById = (req: Request<TaskParams>, res: Response) => {
    const taskId: number = parseInt(req.params.id, 10)

    const findTask = tasks.find((task) => task.id === taskId)

    findTask
        ? res.json({
              data: findTask,
          })
        : res.status(404).json({ error: 'Nothing found' })
}

export const createNewTask = (req: Request, res: Response) => {
    const title = req.body.title

    const newTask = { id: tasks.length + 1, title }

    tasks.push(newTask)

    res.json({ data: newTask })
}

export const editTaskById = (req: Request<TaskParams>, res: Response) => {
    const taskId = parseInt(req.params.id, 10)
    const taskIndex = tasks.findIndex((t) => t.id === taskId)

    if (taskIndex !== -1) {
        tasks[taskIndex].title = req.body.title
        res.json(tasks[taskIndex])
    } else {
        res.status(404).json({ error: 'Task Not found' })
    }
}

export const deleteTaskById = (req: Request<TaskParams>, res: Response) => {
    const taskId = parseInt(req.params.id, 10)
    const taskIndex = tasks.findIndex((t) => t.id === taskId)

    if (taskIndex === -1)
        return res.status(404).json({ error: 'Task Not Found' })

    tasks.splice(taskIndex, 1)
    return res.status(204).json({ data: { id: taskId } })
}
