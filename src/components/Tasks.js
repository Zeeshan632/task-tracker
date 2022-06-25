import Task from './Task'

const Tasks = ({tasks, onDelete, reminder}) => {
    
    return (
        <>
         {tasks.map((task) => (<Task key={task.id} task={task} reminder={reminder} onDelete={onDelete}/>))} 
        </>
    )
}

export default Tasks
