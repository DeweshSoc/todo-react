import React from "react";
import { createBrowserRouter, Outlet, Link } from "react-router-dom";


import { TaskList, AddTaskBtn, About, Error, Task } from "./components";

export function App() {
  return (
    <>
      <nav className="my-0 mx-auto block bg-primary text-primary-text font-montserrat font-medium">
        <ul className="flex list-none justify-end gap-4 py-2 px-8">
          <li>
            <Link className="no-underline text-primary-text" to="/"> Home </Link>
          </li>
          <li>
            <Link to="/about"> About </Link>
          </li>
        </ul>
      </nav>
      <div className="w-3/5 my-4 mx-auto text-center p-4 rounded-md">
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
