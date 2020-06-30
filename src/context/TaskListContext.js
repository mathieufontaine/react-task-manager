import React, {createContext, useState, useEffect} from 'react';
import {v1 as uuid} from "uuid"; 

export const TaskListContext = createContext();


const TaskListContextProvider = ({ children }) => {
    
    const initialState = JSON.parse(localStorage.getItem("tasks")) || [];
    
    const [tasks, setTasks] = useState(initialState);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }, [tasks]);


    const [editTask, setEditTask] = useState('');

    const addTask  = (title) => {
        setTasks([...tasks, {title, id: uuid()}])
    }

    const removeTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    }

    const clearList = () => {
        setTasks('');
    }

    const findItem = (id) => {
        const item = tasks.find(task => task.id === id);
        setEditTask(item);
    }

    const editTitle = (title,id) => {
        const updatedTasks = tasks.map(task => (
            (task.id === id) ? ({title, id}) : task
        ));
        setTasks(updatedTasks);
    }

    return (
    <TaskListContext.Provider  value ={{tasks, addTask, removeTask, clearList, findItem, editTask, setEditTask, editTitle}}>
        {children}
    </TaskListContext.Provider>
    )
}

export default TaskListContextProvider;
