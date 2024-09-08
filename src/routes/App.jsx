import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from '../layout/index';
import MovieDetails from '../pages/MoviesDetails/index';
import SearchResults from '../pages/SearchResults/index';

const App = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path='/' element={<Layout/>}/>
                <Route path='/movie/:id' element={<MovieDetails/>}/>
                <Route path="/search/:query" element={<SearchResults />} />
                <Route path="/trending/movie/day" element={<SearchResults />} />
                <Route path="/category/:category" element={<SearchResults />} />
            </Routes> 
        </HashRouter>
    )
}

export default App;