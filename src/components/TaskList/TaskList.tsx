import { useEffect, useState } from 'react';
import './TaskList.css'
// import {default as data} from "../../data.json"

import  Task  from './Task';
import ShimmerTaskList from '../Shimmer/ShimmerTaskList';


interface ITodo{
  completed:boolean,
  id:number,
  userId:number,
  todo:string
}


const TaskList = ()=> {

  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const jsonData =  await fetch("https://dummyjson.com/todos");
    let response = await jsonData.json();
    setTodos(response?.todos);
    console.log(todos);
  }

  
  return todos.length===0?<ShimmerTaskList/>:(
    <div className="task-list">
      <ul>
        {todos.map(task=>{
          return <Task key={task.id}>{task.todo}</Task>
        })}
      </ul>
    </div>
  );
}

export default TaskList;