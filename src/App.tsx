import React from 'react';
import './App.css';

import  TaskList  from './components/TaskList/TaskList';
import  AddTaskBtn  from './components/TaskAdd/TaskAddButton';

function App() {
  return (
    <>
      <div className="app">
        <h1 className="header">ToDew : A simple todo list app</h1>
        <TaskList></TaskList>
      </div>
      <AddTaskBtn></AddTaskBtn>
    </>
  );
}

export default App;
