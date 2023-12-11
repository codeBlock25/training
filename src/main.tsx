import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./utility/router";
import { Toaster } from "sonner";
import "./style.css";
import { Provider } from "react-redux";
import { store } from "./Context/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Toaster richColors position="top-center" />
      <RouterProvider router={appRouter()} />
    </Provider>
  </React.StrictMode>
);
