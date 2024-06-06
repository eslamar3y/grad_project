import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import ResetPass from "./Pages/passPages/ResetPass.jsx";
import PassChanged from "./Pages/passPages/PassChanged.jsx";
import ChatBot from "./Pages/ChatBot/ChatBot";
import DiseaseInfo, { diseaseDetailsLoader } from "./Pages/Disease/DiseaseInfo";
import ExpertInfo, { expertDetailsLoader } from "./Pages/Expert/ExpertInfo";
import DiseaseDetectionResults from "./Pages/DiseaseDetection/DiseaseDetectionResults";
import Equipments from "./Pages/Equipments/Equipments";
import DiseaseDetection from "./Pages/DiseaseDetection/DiseaseDetection";
import Reset from "./Pages/passPages/Reset";
import Forgot from "./Pages/passPages/forgot";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import Root, { DiseaseAndExpertsLoader } from "./Pages/Root/Root.jsx";
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
import Profile from "./Pages/Profile/Profile.jsx";
import ProtectedForPay from "./components/ProtectedForPay.jsx";
import Subscribtion from "./Pages/Subscribtion/Subscribtion.jsx";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: DiseaseAndExpertsLoader,
        // action: feedBackAction,
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
          <ProtectedForPay path="/login">
            <DiseaseDetection />
          </ProtectedForPay>
        ),
      },
      {
        path: "equipments",
        element: (
          <ProtectedRoute path="/login">
            <Equipments />
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
          <ProtectedForPay path="/login">
            <ChatRoot />
          </ProtectedForPay>
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
        path: "admin/dashboard",
        element: <Users />,
      },
      {
        path: "admin/diseases",
        element: <Disease />,
      },
      {
        path: "admin/feedback",
        element: <Feedback />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "subscribe",
        element: <Subscribtion />,
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
