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
        <ErrorBoundary>
          <SearchBar/>
          <Carousel title="Trending"/>
          <Categories/>
        </ErrorBoundary>
        <Footer/>
      </main>
  );
}

export default Layout;