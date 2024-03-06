import "./TaskList.css";
// import {default as data} from "../../data.json"

import Task from "./Task";
import ShimmerTaskList from "../Shimmer/ShimmerTaskList";
import TaskFilter from "./TaskFilter";
import useTaskList from "../../utils/useTaskList";


export const TaskList = () => {

  console.log("rendering tasklist")
  const {todos, setTodos, originalTodos} = useTaskList();
 
  const filterTaskList = (keyword: string) => {
    const filteredList = originalTodos.filter(task=>task.todo.toLowerCase().includes(keyword.toLowerCase()))
    setTodos(todos=>{
      if(!filteredList.length) return [];
      return filteredList;
    });
  };



  return  (originalTodos.length===0)?(
    <ShimmerTaskList />
  ) : (
    <>
      <h1 className="header">ToDew : A simple todo list app</h1>
      <TaskFilter filterListHandler={filterTaskList}></TaskFilter>
      <div className="task-list">
        <ul>
          {todos.map((task) => {
            return (
              <Task taskKey={task.id} key={task.id}>
                {task.todo}
              </Task>
            );
          })}
        </ul>
      </div>
    </>
  );
};



export default TaskList;
