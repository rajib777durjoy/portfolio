import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../page/Home/Home';
import Detailspage from '../page/Details/Detailspage';

const router =  createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
     
    },
    {
      path:'/detailsPage',
      element:<Detailspage></Detailspage>
    }
  ]);

export default router;