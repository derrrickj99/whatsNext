import { User } from "@/typing";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialUser: User = {
    username: "",
    userId: "",
    sessionId: "",
    role: "dev"
}
const userSlice = createSlice({
    name: 'user',
    initialState: initialUser,
    reducers: {
        login: (state, action: PayloadAction<User>) => {
            state.username = action.payload.username;
            state.sessionId = action.payload.sessionId;
            state.userId = action.payload.userId;
            state.role = action.payload.role;
        },
        logout: (state) => {
            state.username = "";
            state.sessionId = "";
            state.userId = "";
            state.role = "dev";
        },
    }
})

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
