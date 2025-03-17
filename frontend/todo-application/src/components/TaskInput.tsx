import { ChangeEvent, useState } from "react";
import { Task } from "../typing";
import { useAppDispatch } from "../store/hooks";
import { addTask } from "../store/slices/tasks";

// type Props = {
//     onAddClick: (newTask: Task) => void
// }

export const TaskInput = () => {
    const [task, setTask] = useState("")
    const dispatch = useAppDispatch();

    function changeHandler(e: ChangeEvent<HTMLInputElement>) {
        const input = e.target.value
        setTask(input)
    }

    function addClickHandler() {
        const newTask: Task = {
            taskId: Date.now(),
            title: task,
            descrition: "This is a descrition example",
            status: false
        }
        dispatch(addTask(newTask))
    }

    return (
        <div className="container flex items-center justify-around gap-5">
            <input className="border border-black rounded-full py-2 px-5 w-full" placeholder="Enter Task" onChange={(e) => changeHandler(e)} value={task}></input>
            <button className="border border-black rounded-full w-1/3 py-2 px-5 hover:bg-gray-400" onClick={addClickHandler}>
                <span className="material-symbols-rounded">
                    home
                </span>
            </button>
       </div>);
}