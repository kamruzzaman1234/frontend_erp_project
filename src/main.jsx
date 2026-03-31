import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './LayOut/Main.jsx';
import Home from './Pages/Home/Home.jsx';
import ProjectPage from './Pages/ProjectPage/ProjectPage.jsx';
import ProjectDetails from './Pages/ProjectPage/ProjectDetails.jsx';
import TaskTeam from './Pages/TaskTeam/TaskTeam.jsx';
import Payments from './Pages/Payments/Payments.jsx';
import Dashboard from './Pages/Dashboard/Dashboard.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path:'/dashboard',
        element:<Dashboard></Dashboard>
      },
      {
        path: '/projects',
        element: <ProjectPage></ProjectPage>
      },
      {
        path: "/projects/:id",   
        element: <ProjectDetails></ProjectDetails>
      },
      {
        path:'/tasks',
        element:<TaskTeam></TaskTeam>
      },
      {
        path:'/payments',
        element:<Payments></Payments>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
