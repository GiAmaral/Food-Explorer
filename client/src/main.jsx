import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import theme from "./theme";
import { Admin, App, Auth } from "./layouts";
import {
  Home,
  Dish,
  AddDish,
  EditDish,
  SignIn,
  SignUp,
  SignOut,
} from "./pages";
import ErrorBoundary from "./ErrorBoundary";
import AuthProvider from "./hooks/auth";
import NotificationsProvider from "./hooks/notification";
import { signIn, signUp } from "./api/users";
import { createDish, fetchDish, fetchDishes, updateDish } from "./api/dishes";

import "./global.css";

const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: "/",
        loader: fetchDishes,
        element: <Home />,
      },
      {
        path: "/dish/:id",
        loader: fetchDish,
        element: <Dish />,
      },
      {
        element: <Admin />,
        children: [
          {
            path: "/add-dish",
            element: <AddDish />,
            action: createDish,
          },
          {
            path: "/edit-dish/:id",
            loader: fetchDish,
            element: <EditDish />,
            action: updateDish,
          },
        ],
      },
    ],
  },
  {
    element: <Auth />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: "/sign-in",
        element: <SignIn />,
        action: signIn,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
        action: signUp,
      },
    ],
  },
  {
    errorElement: <ErrorBoundary />,
    path: "/sign-out",
    element: <SignOut />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <NotificationsProvider>
          <RouterProvider router={router} />
        </NotificationsProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
