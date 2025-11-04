export default function TaskItem({ taskText, taskItem, onDelete, onCheck }) {
    return (
        <li className={taskItem.completed ? "completed" : ''}>
            <span>{taskText}</span>
            <div className="btns">
                <button onClick={() => onCheck(taskItem.id)} className="check">
                    <i className="fa-solid fa-check"></i>
                </button>
                <button
                    onClick={() => onDelete(taskItem.id)}
                    className="delete"
                >
                    <i className="fa-solid fa-trash"></i>
                </button>
            </div>
        </li>
    );
}
