import { useEffect, useState } from "react";
import "./TaskList.css";
// import {default as data} from "../../data.json"

import Task from "./Task";
import ShimmerTaskList from "../Shimmer/ShimmerTaskList";
import TaskFilter from "./TaskFilter";

interface ITodo {
  completed: boolean;
  id: number;
  userId: number;
  todo: string;
}

export const TaskList = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [originalTodos, setOriginalTodods] = useState<ITodo[]>([]);

  console.log("rendering tasklist")
  useEffect(() => {
    console.log("use effect");
    getData();
  }, []);

  const filterTaskList = (keyword: string) => {
    const filteredList = originalTodos.filter(task=>task.todo.toLowerCase().includes(keyword.toLowerCase()))
    setTodos(todos=>{
      if(!filteredList.length) return [];
      return filteredList;
    });
  };

  const getData = async () => {
    const jsonData = await fetch("https://dummyjson.com/todos");
    let response = await jsonData.json();
    setTodos(response?.todos);
    setOriginalTodods(response?.todos);
  };

  return originalTodos.length === 0 ? (
    <ShimmerTaskList />
  ) : (
    <>
      <TaskFilter filterListHandler={filterTaskList}></TaskFilter>
      <div className="task-list">
        <ul>
          {todos.map((task) => {
            return <Task taskKey={task.id} key={task.id}>{task.todo}</Task>;
          })}
        </ul>
      </div>
    </>
  );
};



export default TaskList;
