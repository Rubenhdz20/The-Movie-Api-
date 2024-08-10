import Header from './components/Header'
import Trending from './pages/Trending'
import Series from './pages/Series'
import Movies from './pages/Movies'
import Categories from './pages/Categories'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <Header/>
      <Trending/>
      <Series/>
      <Movies/>
      <Categories/>
      <Footer/>
    </>
  )
}

export default App;