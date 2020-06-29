import React from 'react';
import TaskList from './components/TaskList';
import TaskListContextProvider from './context/TaskListContext';
import TaskForm from './components/TaskForm';

import './style/App.css';
import './style/Form.css';
import './style/TaskList.css';



function App() {
  return (
    <TaskListContextProvider >
    <div className="App">
      <h1>Task Manager</h1> 
      < TaskForm />
      < TaskList />
    </div>
    </TaskListContextProvider>
  );
}

export default App;
