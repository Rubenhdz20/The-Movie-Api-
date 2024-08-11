import Header from './components/Header/Header'
import SearchBar from './components/SearchBar/index'
import Section from './pages/Section/index'
import Categories from './pages/Categories/Categories'
import Footer from './components/Footer/Footer'
import './App.css'


function App() {
  return (
    <>
      <Header/>
      <SearchBar/>
      <Section title="Premieres" />
      <Section title="Series"/>
      <Section title="Movies"/>
      <Categories/>
      <Footer/>
    </>
  )
}

export default App;

{/* <Section title="Movies" items={moviesData} /> */}
{/* <Categories categories={categoriesData} /> */}