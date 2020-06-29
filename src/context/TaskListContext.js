import React, {createContext, useState} from 'react';
import {v1 as uuid} from "uuid"; 

export const TaskListContext = createContext();


const TaskListContextProvider = ({ children }) => {
    const [tasks, setTasks] = useState([
        {title: 'Watch movie', id: 1},
        {title: 'Wash the dishes', id: 2},
        {title: 'Clean my room', id: 3}
    ]);

    const addTask  = (title) => {
        setTasks([...tasks, {title, id: uuid()}])
    }

    return (
    <TaskListContext.Provider  value ={{tasks, addTask}}>
        {children}
    </TaskListContext.Provider>
    )
}

export default TaskListContextProvider;
