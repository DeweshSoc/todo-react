import { useEffect, useState } from "react";

function Task({children}:{children:React.ReactNode}){

    const [isDone, setIsDone] = useState(false);

    function markDone() {
        setIsDone(done=>!done);
    }

    return (
      <li onClick={markDone} className={isDone ? "done" : ""}>
        {children}
      </li>
    );
}

export default Task;