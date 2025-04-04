import { Task, User } from "./typing";

export const USER: User = {
    userId: 'User123',
    username: 'Derrick Sajan',
    sessionId: 'Session123',
    role: "dev"
}

export const TASKLIST: Task[] = [
    {
        taskId: "task1",
        taskTitle: "Check your email",
        taskDescription: "Look for emails from Bezos about server changes. Make sure he sends you the documentation",
        taskGroup: "Routine",
        dueDate: "2025/04/01",
        duration: 1,
        priority: "1",
        status: false
    },
    {
        taskId: "task2",
        taskTitle: "AWS Course studies",
        taskDescription: "Make sure to complete 3 sections",
        taskGroup: "Habit",
        dueDate: "2025/04/01",
        duration: 1,
        priority: "1",
        status: true
    }
] 
