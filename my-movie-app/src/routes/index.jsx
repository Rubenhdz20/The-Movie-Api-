import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MobileMenu from '../components/MobileMenu/MobileMenu'
import MovieDetails from '../pages/MoviesDetails/index';
import SearchResults from '../pages/SearchResults/index';
import Layout from '../layout/index';


const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
    },
    {
      path:"/movie/:id",
      element: <MovieDetails />, 
    },
    {
        path: '/search-results',
        element: <SearchResults />, 
    },
    {   
      path:'/mobile-menu',
      element: <MobileMenu/>
    }
  ]);

const MyRoutes = () => <RouterProvider router={router}/>;

export default MyRoutes;