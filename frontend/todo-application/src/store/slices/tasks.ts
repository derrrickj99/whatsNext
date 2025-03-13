import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task } from "../../typing";

const initTasks: Task[] = [];

const taskSlice = createSlice({
    name: "task",
    initialState: initTasks,
    reducers: {
        addTask: (state, action: PayloadAction<Task>) => {
            state.push(action.payload)
        },
        removeTask: (state, action: PayloadAction<string>) => {
            const taskDeletedIndex = state.findIndex((t) => t.taskId === action.payload)
            if (taskDeletedIndex < 0) {
                console.log(action.payload + "Not found")
                return;
            }
            return state.filter((_, t) => t !== taskDeletedIndex)

        }

    }
})

export const { addTask, removeTask } = taskSlice.actions
export default taskSlice.reducer;