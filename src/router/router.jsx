import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import Register from "../pages/Register/Register";
import SignIn from "../pages/signin/SignIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/sign-in",
        element: <SignIn />,
      },
    ],
  },
  {
    path: "*",
    element: <h3>Page Not Found</h3>,
  },
]);

export default router;
