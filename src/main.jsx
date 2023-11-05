import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom";
import Blogs from './Blogs';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path:"/blogs",
    element:<Blogs/>
  }
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
