import logo from "../../assets/logo.svg"
import {AiOutlinePlusCircle} from "react-icons/ai"

import styles from "./styles.module.css"
import { useState, ChangeEvent, FormEvent } from "react"

interface Props {
    addTask: (taskTitle: string) => void;
}

export function Header ({addTask}: Props) {
    const [titleTask, setTitleTask] = useState("")

     function handleSubmit(event: FormEvent) {
        event.preventDefault()
        addTask(titleTask)
        setTitleTask("")
     }

    function handleOnChangeTitle(event:ChangeEvent<HTMLInputElement>) {
        setTitleTask(event.target.value)
    }
    return (
       <>
         <header className={styles.header}>
            <img src={logo} alt="logo"  />

            <form className={styles.form} onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Adicione uma nova tarefa"
                    onChange={handleOnChangeTitle}
                    value={titleTask}
                  
                />
                <button 
                    type="submit"
                >
                    Criar
                    <AiOutlinePlusCircle size={20}/>
                </button>
            </form>
            
        </header>
       </>
    )
}