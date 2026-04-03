import 'express-session'

declare module 'express-session' {
    interface SessionData {
        visited: boolean
        user: {
            id: string
            username: string
            password: string
        }
    }
}
