import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export default function TaskItem({ taskText, taskItem, onDelete, onCheck }) {
    const { attributes, listeners, setNodeRef, transform, transition } =
        useSortable({ id: taskItem.id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    const liClassName = taskItem.completed ? "completed" : "";

    return (
        <li className={liClassName} ref={setNodeRef} style={style}>
            <span {...attributes} {...listeners}>
                {taskText}
            </span>
            <div className="btns">
                <button
                    onClick={() => onCheck(taskItem.id)}
                    // onPointerDown={(e) => e.stopPropagation()}
                    className="check"
                >
                    <i className="fa-solid fa-check"></i>
                </button>
                <button
                    onClick={() => onDelete(taskItem.id)}
                    // onPointerDown={(e) => e.stopPropagation()}
                    className="delete"
                >
                    <i className="fa-solid fa-trash"></i>
                </button>
            </div>
        </li>
    );
}
