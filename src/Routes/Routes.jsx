import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import App from "../App";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      
    ],
  },

 
]);