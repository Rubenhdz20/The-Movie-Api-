import React from 'react';
import { createBrowserRouter, Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import Layout from '../layout/index';
import MobileMenu from '../components/MobileMenu/MobileMenu'
import MovieDetails from '../pages/MoviesDetails/index';
import SearchResults from '../pages/SearchResults/index';



const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout/>}/>
                <Route path='/movie-app/menu' element={<MobileMenu/>}/>
                <Route path='/movie-app/movie/:id' element={<MovieDetails/>}/>
                <Route path='/movie-app/search/movies/:search' element={<SearchResults/>}/>
                {/* <Route path="*" element={<NotFound />} /> */}
            </Routes> 
        </BrowserRouter>
    )
}

export default App;