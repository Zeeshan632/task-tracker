import Header from "./components/Header"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"
import { useState } from 'react'

function App() {
  const [tasks, setTasks] = useState([])
  const [showAddTask, setShowAddTask] = useState(false)
  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => 
      task.id === id ? {...task, reminder: !task.reminder} : task
    ))
  }
  
  // Deleting Task
  const deletingTask = (id) => {
    setTasks(tasks.filter((task) => id !== task.id))
  }
  return (
    <div className="container">
      <Header 
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}  
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks} reminder={toggleReminder} onDelete={deletingTask}/> : 'You have no tasks for now'}
    </div>
  );
}
// class App extends React.Component{
//   render() {
//     return <h1>Hello from a class</h1>
//   }
// }

export default App;
