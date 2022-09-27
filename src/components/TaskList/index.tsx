import {TbTrash} from "react-icons/tb"
import { ITask } from "../../App"
import {BsFillCheckCircleFill} from "react-icons/bs"

import styles from "./styles.module.css"

interface Props {
    task: ITask
    deleteTask: (taskId: string) => void;
    checkCompltedTask: (taskId: string) => void
}

export function TaskList({task, deleteTask, checkCompltedTask}: Props) {
 

    return (
        <div className={styles.taskList}>
            <button className={styles.checkContainer} onClick={() => checkCompltedTask(task.id)}>
               {task.isCompleted? <BsFillCheckCircleFill/> : <div/>}
            </button>

            <p className={task.isCompleted ?styles.taskCompleted : ""}>
                {task.title}
            </p>

            <button 
                className={styles.deleteButton}
                onClick={() => deleteTask(task.id)}
            >
                <TbTrash size={20}/>
            </button>
        </div>
    )
}