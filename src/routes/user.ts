import express from 'express'
import { registerUserValidation } from '../validators/user.validator.ts'
import { validate } from '../middlewares/validate.ts'
import { createNewUser } from '../controllers/users.ts'

const router = express.Router()

router.post('/register', registerUserValidation, validate, createNewUser)

export default router