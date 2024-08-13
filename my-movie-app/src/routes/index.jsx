import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from '../components/Header/Header';
import Section from '../components/Section';
import Footer from '../components/Footer/Footer';
import MobileMenu from '../components/MobileMenu/MobileMenu'
import Categories from '../pages/Categories/Categories';
import SearchBar from '../components/SearchBar';
import MovieDetails from '../pages/MoviesDetails/index';
import SearchResults from '../pages/SearchResults/index';
import Layout from '../layout/index';


const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: 'header', element: <Header /> }, 
        { path: 'section', element: <SearchBar /> },
        { path: 'section', element: <Section /> },
        { path: 'categories', element: <Categories /> },
        { path: 'footer', element: <Footer /> },
      ],
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