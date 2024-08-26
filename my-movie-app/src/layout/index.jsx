import React from 'react';
import Header from '../components/Header/Header';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories/Categories';
import Footer from '../components/Footer/Footer';
import Carousel from '../components/Carousel';

function Layout() {
  return (
      <main>
        <Header/>
        <SearchBar/>
        <Carousel title="Premieres"/>
        <Carousel title="Series"/>
        <Carousel title="Movies"/>
        <Categories/>
        <Footer/>
      </main>
  );
}

export default Layout;