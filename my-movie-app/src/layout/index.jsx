import React from 'react';
// import { Outlet } from 'react-router-dom'; // Import Outlet
// import { useLocation } from 'react-router-dom';
import Header from '../components/Header/Header';
import SearchBar from '../components/SearchBar';
import Section from '../components/Section';
import Categories from '../pages/Categories/Categories';
import Footer from '../components/Footer/Footer';

function Layout() {
  return (
      <main>
        <Header/>
        <SearchBar/>
        <Section title="Premieres"/>
        <Section title="Series" />
        <Section title="Movies" />
        <Categories/>
        <Footer/>
      </main>
  );
}

export default Layout;