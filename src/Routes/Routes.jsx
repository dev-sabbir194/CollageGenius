import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import App from "../App";
import College from "../components/College/College";
import Admission from "../components/Admission/Admission";
import MyCollege from "../components/MyCollege/MyCollege";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/home",
        element: <App />,
      },
      {
        path: "/college",
        element:<College/>,
      },
      {
        path: "/admission",
        element: <Admission/>,
      },
      {
        path: "/mycollege",
        element: <MyCollege/>,
      },
      
    ],
  },

 
]);