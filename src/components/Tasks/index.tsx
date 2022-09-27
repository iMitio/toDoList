import { TbClipboardText } from "react-icons/tb";
import { ITask } from "../../App"
import { TaskList } from "../TaskList"
import styles from "./styles.module.css"

interface Props {
    tasks: ITask[]
    deleteTask: (taskId: string) => void;
    checkCompltedTask: (taskId: string) => void
}

export function Tasks({tasks, deleteTask, checkCompltedTask}: Props) {
    const totalTask = tasks.length
    const completedTasks = tasks.filter(task => task.isCompleted).length
    return (
        <section className={styles.container}>

            <header className={styles.header}>
                <div>
                    <p>
                        Tarefas criadas 
                    </p>
                    <span>{totalTask}</span>
                </div>

                <div>
                    <p className={styles.textPurple}>
                        Concluidas 
                    </p>
                    <span>{completedTasks} de {tasks.length}</span>
                </div>
            </header>

           <div className={styles.taskListContainer}>
            {
                tasks.map((task) => {
                    return (
                        <TaskList key={task.id} task={task} deleteTask={deleteTask} checkCompltedTask={checkCompltedTask}/>
                    )
                })
            }
            {
                tasks.length <= 0 &&(
                    <section className={styles.empty}>
                        <TbClipboardText size={50}/>
                        <div>
                            <p>Você ainda não tem tarefas cadastradas</p>
                            <span>Crie tarefas e organize seus itens a fazer</span>
                        </div>
                    </section>
                )
            }
           </div>

        </section>
    )
}