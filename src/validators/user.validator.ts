import { body } from 'express-validator'

export const registerUserValidation = [
    body('name')
        .trim()
        .notEmpty()
        .withMessage('Name is requared')
        .isLength({ min: 2, max: 50 })
        .withMessage('Name must be between 2 and 50 characters'),

    body('email')
        .trim()
        .notEmpty()
        .withMessage('Email is required')
        .isEmail()
        .withMessage('Email is invalid')
        .normalizeEmail(),

    body('password')
        .notEmpty()
        .withMessage('Password is required')
        .isLength({ min: 6, max: 64 })
        .withMessage('Password must be between 6 and 64 characters')
        .matches(/[A-Z]/)
        .withMessage('Password must contain at least one uppercase letter')
        .matches(/[0-9]/)
        .withMessage('Password must contain at least one digit'),

    body('age')
        .optional()
        .isInt({ min: 18, max: 120 })
        .withMessage('Age must be a number between 18 and 120'),
]
