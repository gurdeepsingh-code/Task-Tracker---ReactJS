import Task from './Task';

const Tasks = ({ tasksItems, onDelete, onToggle }) => {
    return (
        <div>
            {tasksItems.map((task, index) => (
                <Task key={index} task={task} onDelete={onDelete} onToggle={onToggle} />
            ))}
        </div>
    )
}

export default Tasks
