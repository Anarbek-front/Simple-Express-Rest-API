import type { Request, Response } from 'express'

export const createNewUser = (req: Request, res: Response) => {
    const { name, email, age } = req.body

    console.log(`request: ${req}`)

    return res.status(201).json({
        success: true,
        message: 'User registered successfully',
        data: {
            name,
            email,
            age: age ?? null,
        },
    })
}
