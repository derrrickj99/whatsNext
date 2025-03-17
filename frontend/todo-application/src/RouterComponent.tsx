import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import TasksPage from "./pages/TasksPage";
import AddTaskPage from "./pages/AddTaskPage";
import EditTaskPage from "./pages/EditTaskPage";
import App from "./App";

export default function RouterComponent() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<HomePage />} />
                    <Route path="tasks">
                        <Route index element={<TasksPage />} />
                        <Route path="add" element={<AddTaskPage />} />
                        <Route path="edit:taskId" element={<EditTaskPage />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
