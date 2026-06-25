import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import FormModalContextProvider from "./contexts/FormModalContext";
import "./theme.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <FormModalContextProvider>
      <RouterProvider router={router} />
    </FormModalContextProvider>
  </StrictMode>,
);
