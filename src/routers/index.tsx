import Login from '../pages/login/login'
import Main from '../layout/mian'
import Index from "../pages/index/index";
import Demo from "../pages/Demo/demo";
import Lern from "../pages/Lern/index";
import Error from '../pages/404/error';
import { Navigate } from "react-router-dom";

const router = [
    {
      path: '/',
      element: <Main/>,
      children: [
        {
            path: '/',
            element: <Navigate to="/index"></Navigate>,
            auth: true
        },
        {
          path: '/index',
          element: <Index/>,
          auth: true
        },
        {
          path: '/index2',
          element: <Index/>,
          auth: true
        },
        {
          path: '/demo',
          element: <Demo/>,
          auth: true
        },
        {
          path: '/lern',
          element: <Lern/>,
          auth: true
        }
      ]
    },
    {
      path: '/login',
      element: <Login/>,
    },
    {
        path: '/Error',
        element: <Error/>,
      },
  ]

export default router