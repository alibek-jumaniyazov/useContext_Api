import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider, Navigate, } from "react-router-dom";
import Login from './Pages/Login.jsx';
import Todos from './Pages/Todos.jsx';
import { UserProvider } from './Contex/UserContext.jsx';

const rootRouter = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to={"/todos"} />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/todos",
    element: (<UserProvider>
      <Todos />
    </UserProvider>)
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(

  <RouterProvider router={rootRouter} />

)
