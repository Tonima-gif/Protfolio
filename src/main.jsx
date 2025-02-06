import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Banner from './components/Banner';
import Details from './components/Details';
import ProjectsDetails from './components/ProjectsDetails';
import Details2 from './components/Details2';
import Details3 from './components/Details3';
import Details4 from './components/Details4';
import Details5 from './components/Details5';
import Details6 from './components/Details6';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:'/',
        element:<Banner></Banner>
      },
      {
        path:'detail',
        element:<Details></Details>
      },
      {
        path:'detail1',
        element:<ProjectsDetails></ProjectsDetails>
      },
      {
        path:'detail2',
        element:<Details2></Details2>
      },
      {
        path:'detail3',
        element:<Details3></Details3>
      },
     
      {
        path:'detail4',
        element:<Details4></Details4>
      },
     
      {
        path:'detail5',
        element:<Details5></Details5>
      },
      {
        path:'detail6',
        element:<Details6></Details6>
      },
     
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
