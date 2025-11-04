import { useState } from "react";

export default function TaskForm({ onTaskSubmit }) {
    const [taskName, setTaskName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (taskName.trim() == "") {
            return;
        }

        onTaskSubmit(taskName);

        setTaskName("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="task"
                id="task-input"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                placeholder="Add a new task"
            />
            <button type="submit" id="add-task">
                <i className="fa-solid fa-plus"></i>
            </button>
        </form>
    );
}
