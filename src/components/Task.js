import React from 'react';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faTrash } from '@fortawesome/free-solid-svg-icons';

// library.add(faTrash);
// library.add(library);

const Task = ({task}) => {
    return (
        <li className = "task">
            <p className="title">{task.title}</p>
            <div>
                <button className="btn btn-delete">
                    <i className="fa fa-trash"></i>
                </button>
                <button className="btn btn-edit">
                    <i className="fa fa-pencil"></i>
                </button>
            </div>
        </li>
    )
}

export default Task;
