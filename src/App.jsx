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
import Users from "./Pages/Admin/users.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
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
        element: <DiseaseDetection />,
      },
      {
        path: "equipments",
        element: <Equipments />,
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
        path: "about",
        element: <About />,
      },
      {
        path: "admin/dashboard",
        element: <Users />,
      },
      // ,
      // {
      //   path: "*",
      //   element: (
      //     <h1 className="text-center mt-80 font-bold font-popins">
      //       404 - Not Found
      //     </h1>
      //   ),
      // },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
