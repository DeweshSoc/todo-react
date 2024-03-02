import { useState } from "react";
import "./TaskFilter.css";

const TaskFilter = ({ filterListHandler }: { filterListHandler: Function }) => {
  const [usertaskInput, setUserTaskInput] = useState("");

  return (
    <div className="task-add-section">
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
        className="task-add-button"
        onClick={filterListHandler.bind(this, usertaskInput)}
      >
        Filter
      </button>
    </div>
  );
};

export default TaskFilter;
