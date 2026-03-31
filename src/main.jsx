import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './LayOut/Main.jsx';
import Home from './Pages/Home/Home.jsx';
import ProjectPage from './Pages/ProjectPage/ProjectPage.jsx';
import ProjectDetails from './Pages/ProjectPage/ProjectDetails.jsx';

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
        path: '/projects',
        element: <ProjectPage></ProjectPage>
      },
      {
        path: "/projects/:id",   
        element: <ProjectDetails></ProjectDetails>
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
