import TaskItem from "./TaskItem";

import {
    SortableContext,
    verticalListSortingStrategy,
} from "@dnd-kit/sortable";

export default function TaskList({ tasks, onDelete, onCheck }) {
    const taskIds = tasks.map((item) => item.id);
    return (
        <SortableContext items={taskIds} strategy={verticalListSortingStrategy}>
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
        </SortableContext>
    );
}
