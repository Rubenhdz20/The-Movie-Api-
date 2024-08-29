import React from 'react';
import Header from '../components/Header/Header';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories/Categories';
import Footer from '../components/Footer/Footer';
import Carousel from '../components/Carousel';
import ErrorBoundary from '../components/ErrorBoundary';

function Layout() {
  return (
      <main>
        <Header/>
        <SearchBar/>
        <ErrorBoundary>
          <Carousel title="Trending"/>
        </ErrorBoundary>
        <Categories/>
        <Footer/>
      </main>
  );
}

export default Layout;