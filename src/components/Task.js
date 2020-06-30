import React, { useContext } from 'react';
import {TaskListContext} from '../context/TaskListContext';


const Task = ({ task }) => {

    const { removeTask, findItem } = useContext(TaskListContext);


    return (
        <li className = "task">
            <p className="title">{task.title}</p>
            <div>
                <button className="btn btn-delete"
                        onClick = {() => removeTask(task.id)}>
                    <i className="fa fa-trash"></i>
                </button>
                <button className="btn btn-edit"
                        onClick = {() => findItem(task.id)}>
                    <i className="fa fa-pencil"></i>
                </button>
            </div>
        </li>
    )
}

export default Task;
