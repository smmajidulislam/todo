import { createBrowserRouter } from "react-router";
import App from "../App";
import TodoApp from "../pages/TodoApp";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/todo",
    element: <TodoApp />,
  },
]);

export default routers;
