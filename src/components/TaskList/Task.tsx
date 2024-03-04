import {Link} from "react-router-dom"
import { useState } from "react";

interface ITaskOption{
  pageX?:number,
  pageY?:number,
  show:boolean,
  options?:Array<{id:number,text:string, link:string}>
}

function Task({ children, taskKey }: { children: React.ReactNode, taskKey:number}) {
  const [isDone, setIsDone] = useState(false);
  const [optionData, setOptionData] = useState<ITaskOption>({
    show:false,
    options:[
      {
        id:1,
        text:'View Task',
        link:'/task/'+taskKey
      }
    ]
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
      setOptionData(option => {
        return {
          ...option,
          pageX : x,
          pageY : y,
          show: true
        }
      })
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
        className={optionData.show ? "context-menu" : "context-menu-hide"}
        style={{ left: optionData.pageX, top: optionData.pageY   }}
      >
        <ul>
          {optionData.options?.map((option) => (
            <Link key={option.id} to={option.link}>
              <li>{option.text}</li>
            </Link>
          ))}
        </ul>
      </div>

      <li
        onClick={handleClicks}
        onContextMenu={handleClicks}
        className={isDone ? "done" : ""}
      >
        {children}
      </li>
    </>
  );
}

export default Task;
