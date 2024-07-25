import { ChangeEvent, useState, KeyboardEvent } from 'react'
import { todo } from '../types'
import { toDo } from '../data'

export const useToDo = () => {
    const [toDoList, setToDoList] = useState<todo[]>(toDo)
    const [toggleNewTask, setToggleNewTask] = useState<boolean>(false)
    const [newTask, setNewTask] = useState<todo>({
      id: '',
      todo: '',
      isComplete: false,
      isDelete:false,
    })
  
    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
      setNewTask({
        id: String(toDoList.length + 1),
        todo: e.target.value,
        isComplete: false,
        isDelete:false,
      })
    }
  
    const handleKeyPress = ((e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        if (newTask) {
          setToDoList((oldState) => [...oldState, newTask])
          setNewTask({
            id: '',
            todo: '',
            isComplete: false,
            isDelete:false
          })
          setToggleNewTask(false)
        }
      }
  
    })
  
    const handleDeleteTask = (id: string) => {
      setToDoList(toDoList.map( todo => todo.id === id ? {...todo, isDelete:true}: todo ))
      setTimeout(()=>{
        const newState = toDoList.filter(todo => todo.id !== id)
        setToDoList(newState)
      },1500)
      
    }
  
    const handleComplete = (id: string) => {
      const newState = toDoList.map(todo => todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo)
      setToDoList(newState)
    }
  
    return { toDoList, toggleNewTask, newTask, setToggleNewTask, handleOnChange, handleKeyPress, handleDeleteTask, handleComplete }
  }