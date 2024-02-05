import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Login from "./Pages/Login/Login.jsx";
import Register from "./Pages/Register/Register.jsx";
import Reset from "./Pages/passPages/Reset.jsx";
import ResetPass from "./Pages/passPages/ResetPass.jsx";
import PassChanged from "./Pages/passPages/PassChanged.jsx";
import Forgot from "./Pages/passPages/forgot.jsx";
import DiseaseDetection from "./Pages/DiseaseDetection/DiseaseDetection.jsx";
import DiseaseDetectionResults from "./Pages/DiseaseDetection/DiseaseDetectionResults.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "forgot",
    element: <Forgot />,
  },
  {
    path: "reset",
    element: <Reset />,
  },
  {
    path: "resetPass",
    element: <ResetPass />,
  },
  {
    path: "passChanged",
    element: <PassChanged />,
  },
  {
    path: "detection",
    element: <DiseaseDetection />,
  },
  {
    path: "detection-results",
    element: <DiseaseDetectionResults />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
