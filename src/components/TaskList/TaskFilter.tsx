import { useState } from "react";

interface ITaskFilter {
  filterListHandler : Function
}


export const TaskFilter : React.FC<ITaskFilter> = ({ filterListHandler }) => {
  const [usertaskInput, setUserTaskInput] = useState("");

  return (
    <div className="mt-6 mx-0 mb-0">
      <input
        className="task-input"
        type="text"
        name="task-input"
        id="task-input"
        value={usertaskInput}
        onChange={(e) => {
          setUserTaskInput(e.target.value);
        }}
      />
      <button
        className="p-4 border-none h-[51px] rounded-md ml-4 bg-primary text-primary-text text-base"
        onClick={filterListHandler.bind(this, usertaskInput)}
      >
        Filter
      </button>
    </div>
  );
};

export default TaskFilter;
