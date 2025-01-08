import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Banner from './components/Banner';
import AboutLink from './components/AboutLink';
import ContactLink from './components/ContactLink';
import Details from './components/Details';
import SkillsLink from './components/SkillsLink';
import ProjectsDetails from './components/ProjectsDetails';
import Details2 from './components/Details2';
import Details3 from './components/Details3';
import Details4 from './components/Details4';
import Details5 from './components/Details5';

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
        path:'about',
        element:<AboutLink></AboutLink>
      },
      {
        path:'contact',
        element:<ContactLink></ContactLink>
      },
      {
        path:'detail',
        element:<Details></Details>
      },
      {
        path:'skill',
        element:<SkillsLink></SkillsLink>
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
     
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
