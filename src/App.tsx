import React from "react";
import { createBrowserRouter, Outlet, Link } from "react-router-dom";
import "./App.css";

import { TaskList, AddTaskBtn, About, Error, Task } from "./components";

export function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/about"> About </Link>
          </li>
        </ul>
      </nav>
      <div className="app">
        <Outlet />
      </div>
    </>
  );
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path:"",
        element:<TaskList />
      },
      {
        path:"/task/:taskId",
        element:<Task/>
      },
      {
        path: "about",
        element: <About></About>,
      },
    ],
    errorElement: <Error />,
  },
]);

export default App;
