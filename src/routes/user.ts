import express from 'express'
import { registerUserValidation } from '../validators/user.validator.ts'
import { validate } from '../middlewares/validate.ts'
import {
    createNewUser,
    userAuth,
    userAuthStatus,
} from '../controllers/users.ts'

const router = express.Router()

router.post('/register', registerUserValidation, validate, createNewUser)

router.post('/auth', userAuth)
router.get('/auth/status', userAuthStatus)

export default router
