import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../page/Home/Home';
import Detailspage from '../page/Details/Detailspage';
import Layout from '../Main/Layout';

const router =  createBrowserRouter([
    {
      path: "/",
      element:<Layout></Layout>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        }
      ]
    },
    {
      path:'/detailsPage/:id',
      element:<Detailspage></Detailspage>
    }
  ]);

export default router;