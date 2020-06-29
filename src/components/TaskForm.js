import React, { useContext, useState } from 'react';
import {TaskListContext} from '../context/TaskListContext';


const TaskForm = () => {
    const { addTask } = useContext(TaskListContext);
    const [title, setTitle] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(title);
    };


    return (
        <form className="form"
              onSubmit={handleSubmit}>
            <input type="text" 
            className="text"
            placeholder="Add task.." 
            value = {title}
            onChange = {(e) => setTitle(e.target.value) }
            required
            />
        <div className="buttons">
            <button className="btn add-btn">
                Add new task
            </button>
            <button className="btn clear-btn">
                Clear
            </button>
        </div>
        </form>
    )
}

export default TaskForm;
