import { useParams } from "react-router-dom";

export const Task = () =>{

    const {taskId} = useParams();


    return (
      <div>
        <h1 className="header">ToDew : A simple todo list app</h1>
        <h1>Task name</h1>
        <p>Task info - {taskId}</p>
      </div>
    );
}

export default Task;