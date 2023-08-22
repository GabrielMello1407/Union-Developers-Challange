import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
//router
import { createBrowserRouter,Route, RouterProvider } from 'react-router-dom'

//Páginas
import Home from './routes/Home.tsx'
import Profile from './routes/Profile/Profile.tsx'
import ProfileLocation from './routes/Profile/ProfileLocation.tsx'
import ProfileLogin from './routes/Profile/ProfileLogin.tsx'

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element:<Home/>
      },
      {
        path: "/profile",
        element:<Profile/>
      },
      {
        path: "/profile/login",
        element:<ProfileLogin/>
      },
      {
        path: "/profile/location",
        element:<ProfileLocation/>
      }

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
