import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App";
import GroupsPage from "./pages/groups/GroupsPage";
import EditGroupPage from "./pages/groups/EditGroupPage";
import AddGroupPage from "./pages/groups/EditGroupPage";
import HomePage from "./pages/HomePage";
import TasksPage from "./pages/tasks/TasksPage";
import AddTaskPage from "./pages/tasks/AddTaskPage";
import EditTaskPage from "./pages/tasks/EditTaskPage";

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
                    <Route path="groups">
                        <Route index element={<GroupsPage />} />
                        <Route path="add" element={<AddGroupPage />} />
                        <Route path="edit:groupId" element={<EditGroupPage />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
