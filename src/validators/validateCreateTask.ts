import type { NextFunction, Request, Response } from 'express'

export const validateCreateTask = (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    const { title, completed } = req.body

    if (typeof title !== 'string')
        return res.status(400).json({ error: 'title must be a string.' })

    const trimTitle = title.trim()

    if (trimTitle === '')
        return res.status(400).json({ error: 'The header cannot be empty.' })
    if (trimTitle.length > 100)
        return res
            .status(400)
            .json({ error: 'the length should not exceed 100 characters.' })
    if (typeof completed !== 'boolean') {
        return res.status(400).json({ error: 'completed not boolean' })
    }

    req.body.title = trimTitle

    next()
}
