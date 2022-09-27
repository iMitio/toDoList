import {Header} from  "./components/Header"
import { Tasks } from "./components/Tasks"

import {useState} from "react"

export interface ITask {
  id: string;
  title: string;
  isCompleted: boolean
}

function App() {

  const [task, setTask] = useState<ITask[]>([
    {"id" : "1", "title": "Nyaaaaaaaaaaaaaaa", isCompleted: true},
    {"id" : "ashvasvhas", "title": "test2", isCompleted:false}
  ])

  function handleaddTask (taskTitle: string) {
    setTask([...task, {
      id: crypto.randomUUID(),
      title: taskTitle,
      isCompleted: false,
    }])
  }

  function handleDeleteTaskById(id: string) {
    const newTask = task.filter((task) => task.id !== id)
    setTask(newTask)
  }

  function handleCheckCompletedTaskById(TaskId: string) {
    const newTask = task.map((task) =>{
      if(task.id === TaskId){
        return {
          ...task,
          isCompleted: !task.isCompleted
        }
      }
      return task
    })
    setTask(newTask)
  }

  return (
    <div className="App">
      <Header addTask={handleaddTask}/>
      <Tasks tasks={task} deleteTask={handleDeleteTaskById} checkCompltedTask={handleCheckCompletedTaskById}/>
    </div>
  )
}

export default App
