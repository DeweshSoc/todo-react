import { Link } from "react-router-dom";
import { useState } from "react";
// import React from "react";

interface ITask {
  children: React.ReactNode;
  taskKey: number;
}

interface ITaskOption {
  pageX?: number;
  pageY?: number;
  show: boolean;
  options?: Array<{ id: number; text: string; link: string }>;
}

const Task: React.FC<ITask> = ({ children, taskKey }) => {
  const [isDone, setIsDone] = useState(false);
  const [optionData, setOptionData] = useState<ITaskOption>({
    show: false,
    options: [
      {
        id: 1,
        text: "View Task",
        link: "/task/" + taskKey,
      },
    ],
  });

  function markDone() {
    setOptionData((option) => {
      return {
        ...option,
        show: false,
      };
    });
    setIsDone((done) => !done);
  }

  function openOptions(x: number, y: number) {
    setOptionData((option) => {
      return {
        ...option,
        pageX: x,
        pageY: y,
        show: true,
      };
    });
  }

  function handleClicks(ev: React.MouseEvent) {
    if (ev.type === "click") {
      markDone();
    }
    if (ev.type === "contextmenu") {
      // console.log("right click", ev);
      ev.preventDefault();
      openOptions(ev.pageX, ev.pageY);
    }
  }

  return (
    <>
      <div
        className={optionData.show ? "inline-block bg-[#ccc] p-4 rounded-md absolute" : "hidden"}
        style={{ left: optionData.pageX, top: optionData.pageY }}
      >
        <ul className="list-none">
          {optionData.options?.map((option) => (
            <Link className="no-underline text-black" key={option.id} to={option.link}>
              <li>{option.text}</li>
            </Link>
          ))}
        </ul>
      </div>

      <li
        onClick={handleClicks}
        onContextMenu={handleClicks}
        className={
          isDone
            ? "bg-primary-text text-[#eeeeee] line-through hover:cursor-pointer active:animate-task-click active:select-none p-4 m-4 rounded-md"
            : "bg-primary rounded-md text-primary-text font-roboto text-base p-4 m-4 hover:cursor-pointer active:animate-task-click active:select-none"
        }
      >
        {children}
      </li>
    </>
  );
};

export default Task;
