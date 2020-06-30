import React, { useContext } from 'react';
import {TaskListContext} from '../context/TaskListContext';
import Task from './Task';

const TaskList = () => {

    const {tasks} = useContext(TaskListContext);

    return (
        <div>
            {tasks.length ?
            <ul className="list">
                {tasks && tasks.map(task => (
                    <Task task={task} key={task.id} />
                ))}
            </ul>
            : (<h3 className="no-tasks">No Tasks</h3>)
            }
        </div>
    )
}

export default TaskList;
