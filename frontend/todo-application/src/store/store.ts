import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./slices/tasks"
import userReducer from "./slices/user"

export const store = configureStore({
    reducer: {
        user: userReducer,
        tasks: taskReducer
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
