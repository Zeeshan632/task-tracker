import { FaTimes } from 'react-icons/fa'

const Task = ({task, onDelete, reminder}) => {
    return (
        <div className={`task ${task.reminder ? 'reminder': ''}`} onDoubleClick={() => reminder(task.id)}>
            <h3>{task.text} <FaTimes onClick={() => onDelete(task.id)} style={{color: 'red', cursor: 'pointre'}} /></h3>
            <h3>{task.day}</h3>
        </div>
    )
}

export default Task
