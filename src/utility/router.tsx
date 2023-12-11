import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "../Layout/Base";
import { authorizedOnly } from "./auth";
import LoginPage from "../Pages/Auth/login";
import AuthLayout from "../Layout/Auth";
import RegisterPage from "../Pages/Auth/register";

export function appRouter() {
  return createBrowserRouter([
    {
      path: "/",
      element: <BaseLayout />,
      loader: authorizedOnly,
      children: [
        {
          path: "/",
          element: <div>Home</div>,
        },
        {
          path: "/about",
          element: <div>About</div>,
        },
      ],
    },
    {
      path: "/auth",
      element: <AuthLayout />,
      children: [
        {
          path: "login",
          element: <LoginPage />,
        },
        {
          path: "register",
          element: <RegisterPage />,
        },
      ],
    },
  ]);
}
