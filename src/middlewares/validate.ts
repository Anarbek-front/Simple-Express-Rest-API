import type { NextFunction, Request, Response } from 'express'
import { validationResult } from 'express-validator'

export const validate = (req: Request, res: Response, next: NextFunction) => {
    const result = validationResult(req).formatWith((err) => {
        if (err.type === 'field') {
            return {
                field: err.path,
                message: err.msg,
                value: err.value,
            }
        }
        return {
            field: null,
            message: err.msg,
        }
    })

    if (result.isEmpty()) return next()

    return res.status(400).json({
        success: false,
        message: 'Validation error',
        errors: result.array(),
    })
}
