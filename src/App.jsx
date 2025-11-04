import { useState, useEffect } from "react";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./App.css";

function App() {
    const [tasks, setTasks] = useState([
        {
            task: "Task 1 trial",
            id: 1,
            completed: false,
        },
        {
            task: "Task 1 trial",
            id: 2,
            completed: true,
        },
    ]);

    const handleAddTask = (taskName) => {
        const newTask = {
            task: taskName,
            id: Date.now(),
            completed: false,
        };

        setTasks([...tasks, newTask]);
    };

    const handleDeleteTask = (taskId) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    };

    const handleCompleteTask = (taskId) => {
        setTasks(
            tasks.map((task) =>
                task.id === taskId ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const pendingTasks = tasks.filter(task => !task.completed)
    const completedTasks = tasks.filter(task => task.completed)

    return (
        <>
            <Header />
            <div className="container">
                <TaskForm onTaskSubmit={handleAddTask} />

                <p>Tasks:</p>
                <TaskList tasks={pendingTasks} onDelete={handleDeleteTask} onCheck={handleCompleteTask} />

                <p>Done:</p>
                <TaskList tasks={completedTasks} onDelete={handleDeleteTask} onCheck={handleCompleteTask} />
            </div>
        </>
    );
}

export default App;
