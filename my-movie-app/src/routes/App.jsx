import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
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
                <Route path='/movie/:id' element={<MovieDetails/>}/>
                <Route path="/search/:query" element={<SearchResults />} />
                <Route path="/trending/movie/day" element={<SearchResults />} />
                <Route path="/category/:category" element={<SearchResults />} />
                {/* <Route path="*" element={<NotFound />} /> */}
            </Routes> 
        </BrowserRouter>
    )
}

export default App;