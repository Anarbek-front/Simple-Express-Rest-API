import { type Request, type Response } from 'express'
import { users } from '../data.ts'

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

export const userAuth = (req: Request, res: Response) => {
    const {
        body: { username, password },
    } = req
    const findUser = users.find((user) => user.username === username)
    if (!findUser || findUser.password !== password)
        return res.status(401).send({ msg: 'BAD CREDENTIALS' })
    req.session.user = findUser
    return res.status(200).send(findUser)
}

export const userAuthStatus = (req: Request, res: Response) => {
    req.sessionStore.get(req.sessionID, (err, session) => {
        console.log(session)
    })
    return req.session.user
        ? res.status(200).send(req.session.user)
        : res.status(401).send({ msg: 'Not Authenticated' })
}
