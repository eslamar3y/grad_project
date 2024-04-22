import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import ResetPass from "./Pages/passPages/ResetPass.jsx";
import PassChanged from "./Pages/passPages/PassChanged.jsx";
import About from "./Pages/About/About";
import ChatBot from "./Pages/ChatBot/ChatBot";
import DiseaseInfo, { diseaseDetailsLoader } from "./Pages/Disease/DiseaseInfo";
import ExpertInfo, { expertDetailsLoader } from "./Pages/Expert/ExpertInfo";
import DiseaseDetectionResults from "./Pages/DiseaseDetection/DiseaseDetectionResults";
import Equipments from "./Pages/Equipments/Equipments";
import DiseaseDetection from "./Pages/DiseaseDetection/DiseaseDetection";
import Reset from "./Pages/passPages/Reset";
import Forgot from "./Pages/passPages/ResetPass";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import Root, {
  DiseaseAndExpertsLoader,
  feedBackAction,
} from "./Pages/Root/Root.jsx";
import Users from "./Pages/Admin/UsersPage.jsx";
import Error from "./Pages/Error/Error.jsx";
import Disease from "./Pages/Admin/DiseasesPage.jsx";
import Feedback from "./Pages/Admin/Feedback.jsx";
import AddEquipment from "./components/AddEquipment.jsx";
import EditEquipments from "./components/EditEquipments.jsx";
import RealChat from "./Pages/RealChat/RealChat.jsx";
import ExpertChat from "./Pages/RealChat/ExpertChat.jsx";
import ChatRoot from "./Pages/RealChat/ChatRoot.jsx";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./Http/equipmentsHttp.js";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import ProtectedRouteAdmin from "./components/ProtectedRouteAdmin.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    action: feedBackAction,
    children: [
      {
        index: true,
        element: <Home />,
        loader: DiseaseAndExpertsLoader,
      },
      {
        path: "expert/:expertId",
        element: <ExpertInfo />,
        loader: expertDetailsLoader,
      },
      {
        path: "disease/:diseaseId",
        element: <DiseaseInfo />,
        loader: diseaseDetailsLoader,
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
        element: (
          <ProtectedRoute>
            {" "}
            <DiseaseDetection />{" "}
          </ProtectedRoute>
        ),
      },
      {
        path: "equipments",
        element: (
          <ProtectedRoute>
            {" "}
            <Equipments />{" "}
          </ProtectedRoute>
        ),
        children: [
          {
            path: "add",
            element: <AddEquipment />,
          },
          {
            path: "edit/:id",
            element: <EditEquipments />,
          },
        ],
      },
      {
        path: "result",
        element: <DiseaseDetectionResults />,
      },
      {
        path: "chat",
        element: <ChatBot />,
      },
      {
        path: "realChat",
        element: (
          <ProtectedRoute>
            {" "}
            <ChatRoot />{" "}
          </ProtectedRoute>
        ),
        id: "experts",
        loader: DiseaseAndExpertsLoader,
        children: [
          {
            index: true,
            element: <RealChat />,
          },
          {
            path: ":id",
            element: <ExpertChat />,
          },
        ],
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "admin/dashboard",
        element: (
          // <ProtectedRouteAdmin>
          <Users />
          // </ProtectedRouteAdmin>
        ),
      },
      {
        path: "admin/diseases",
        element: <Disease />,
      },
      {
        path: "admin/feedback",
        element: <Feedback />,
      },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
