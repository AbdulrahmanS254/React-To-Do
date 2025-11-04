import TaskItem from "./TaskItem";
export default function TaskList({ tasks, onDelete, onCheck }) {
    return (
        <ul>
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    taskText={task.task}
                    taskItem={task}
                    onDelete={onDelete}
                    onCheck={onCheck}
                />
            ))}
        </ul>
    );
}
