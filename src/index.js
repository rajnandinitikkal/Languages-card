import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from "./Views/Home/Home"
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Diwali from './Components/Diwali/Diwali';
import Holi from './Components/Holi/Holi';
import MakarSankranti from './Components/MakarSankranti/MakarSankranti';
import Christmas from './Components/Christmas/Christmas';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:"/Diwali",
    element:<Diwali/>
  },
  {
    path:"/Holi",
    element:<Holi/>
  },
  {
    path:"/Christmas",
    element:<Christmas/>
  },
  {
    path:"/MakarSankranti",
    element:<MakarSankranti/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <RouterProvider router={router} />

  </>
);
