import React, { useContext, useState, useEffect } from 'react';
import {TaskListContext} from '../context/TaskListContext';


const TaskForm = () => {
    const { addTask, clearList, editTask, setEditTask, editTitle } = useContext(TaskListContext);
    const [title, setTitle] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        if(editTask === ''){
            addTask(title);
        } else {
            editTitle (title, editTask.id);
        }
        setTitle('');
        setEditTask('');
    };

    useEffect(() => {
        if(editTask !== ''){
            setTitle(editTask.title);
        } else {
            setTitle('');
        }
    }, [editTask]);

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
                {editTask === '' ? ('Add new task') : ('Edit task')}
            </button>
            <button className="btn clear-btn"
                    onClick={clearList}>
                Clear
            </button>
        </div>
        </form>
    )
}

export default TaskForm;
