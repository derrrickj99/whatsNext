import { z } from "zod"

const TaskSchema = z.object(
    {
        taskGroup: z.string().nonempty({ message: "Please select one Category" }),
        taskTitle: z.string().min(5, { message: "Title is too short! (min: 5)" }).max(15, { message: "Title is too long! (max: 15)" }),
        taskDescription: z.string(),
        taskId: z.string().nonempty({ message: "No Task ID found!" }),
        priority: z.string({ invalid_type_error: "Invalid Priority Number" }),

        //FIX! Date should be of a particular string format. (dd/MM/yyyy) as per date-fns
        dueDate: z.string(),
        duration: z.number().max(2, { message: "Task duration is too long! (Max: 2)" }),
        status: z.boolean()
    }
)

export { TaskSchema };    