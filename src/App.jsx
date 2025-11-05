import { useState, useEffect } from "react";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { DndContext, closestCenter, closestCorners } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import "./App.css";

function App() {
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem("tasks");
        return savedTasks ? JSON.parse(savedTasks) : [];
    });

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

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
                task.id === taskId
                    ? { ...task, completed: !task.completed }
                    : task
            )
        );
    };

    const pendingTasks = tasks.filter((task) => !task.completed);
    const completedTasks = tasks.filter((task) => task.completed);

    function handleDragEnd(event) {
        const { active, over } = event;

        if (over && active.id !== over.id) {
            setTasks((currentTasks) => {
                const oldIndex = currentTasks.findIndex(
                    (task) => task.id === active.id
                );
                const newIndex = currentTasks.findIndex(
                    (task) => task.id === over.id
                );

                return arrayMove(currentTasks, oldIndex, newIndex);
            });
        }
    }

    return (
        <>
            <Header />
            <main>
                <div className="container">
                    <TaskForm onTaskSubmit={handleAddTask} />

                    <DndContext
                        collisionDetection={closestCenter}
                        onDragEnd={handleDragEnd}
                    >
                        <p>Tasks:</p>
                        <TaskList
                            tasks={pendingTasks}
                            onDelete={handleDeleteTask}
                            onCheck={handleCompleteTask}
                        />

                        <p>Done:</p>
                        <TaskList
                            tasks={completedTasks}
                            onDelete={handleDeleteTask}
                            onCheck={handleCompleteTask}
                        />
                    </DndContext>
                </div>
            </main>
        </>
    );
}

export default App;
