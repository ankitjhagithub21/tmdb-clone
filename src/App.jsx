import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './pages/Home'
import Movies from './pages/Movies'
import Navbar from './components/Navbar'
import SearchResults from './pages/SearchResults';
import MovieDetail from './pages/MovieDetail';
import Footer from './components/Footer'
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"

const App = () => {
  const formatReleaseDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/movies' element={<Movies/>}/>
    <Route path='/search/:query' element={<SearchResults formatReleaseDate={formatReleaseDate}/>}/>
    <Route path='/movie/:id' element={<MovieDetail/>}/>
    <Route path='movies/movie/:id' element={<MovieDetail/>}/>
   </Routes>
   <Footer/>
   </BrowserRouter>
  )
}

export default App