import { useState,useEffect } from "react";


export interface ITodo {
  completed: boolean;
  id: number;
  userId: number;
  todo: string;
}

export const useTaskList = () => {

    const [todos, setTodos] = useState<ITodo[]>([]);
    const [originalTodos, setOriginalTodods] = useState<ITodo[]>([]);

    const getData = async () => {
      const jsonData = await fetch("https://dummyjson.com/todos");
      let response = await jsonData.json();
      setTodos(response?.todos);
      setOriginalTodods(response?.todos);
    };

    console.log("running useTaskList hook", todos);
    useEffect(() => {
      console.log("running use effect of useTasklIst hook");
      getData();
    }, []);

    return {todos,originalTodos,setTodos};
}

export default useTaskList;