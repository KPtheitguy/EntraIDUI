import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import Login from "../../Pages/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Dashboard></Dashboard> },
      { path: "/dashboard", element: <Dashboard></Dashboard> },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
