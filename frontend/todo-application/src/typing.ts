export type Task = {
    taskId: string,
    taskTitle: string,
    taskDescription: string,
    taskGroup: string,
    priority: string,
    duration: number,
    dueDate: string,
    status: boolean
}
export type UserLogin = {
    email: string,
    password: string
}
export type User = {
    username: string,
    userId: string,
    sessionId: string,
    role: "admin" | "dev" | "user"
}
