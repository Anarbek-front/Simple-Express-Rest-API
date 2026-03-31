declare namespace Express {
    export interface Request {
        taskIndex: number
        findTask: {
            id: number
            title: string
        }
        newTask: {
            id: number
            title: string
        }
        taskId: number
        newCompleteTask: {
            id: number
            title: string
            completed: boolean
        }
    }
}
