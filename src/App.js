import React, { useState } from "react";
import MoviesList from './components/MoviesList'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NotFound from "./components/NotFound";
import './App.css'
import NavbarCustom from "./components/NavbarCustom";
import About from "./components/About";

import Add from './components/Add';
import Home from "./components/Home";
import SingleMovie from "./components/SingleItem";

function App() {

  const [movies, setMovies] = useState([
    { id: 1, Title: "one piece: Gold   ", Poster: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/51158316-fd7e-48ca-b5fe-8542e9dfe357/dbcetur-efef15e8-04b6-4583-bd10-49bd6177824a.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzUxMTU4MzE2LWZkN2UtNDhjYS1iNWZlLTg1NDJlOWRmZTM1N1wvZGJjZXR1ci1lZmVmMTVlOC0wNGI2LTQ1ODMtYmQxMC00OWJkNjE3NzgyNGEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.cFUd8cZM2HLa1ayFd5pSQDahlx9WOWA0Y5s9iQosg98", Year: "2016", About: "In their quest for One Piece, the Straw Hat crew arrives in Grantesoro, the entertainment capital of the world, where wealthy men come to gamble at the casinos and attend the grandest shows. Grantesoro is an impregnable sanctuary controlled by the Emperor of Gold." },
    { id: 2, Title: "spider-man no way home", Poster: "https://fr.web.img4.acsta.net/pictures/21/11/16/10/01/4860598.jpg", Year: "2021", About: "With Spiderman's identity now revealed, he is unmasked and no longer able to separate his normal life as Peter Parker from the high stakes of being a superhero. When Peter asks Doctor Strange for help, the stakes become even more dangerous, forcing him to find out what it really means to be Spiderman." },
  ]);
  const addFilm = (film) => {
    setMovies([...movies, film])
  }
  const onSearch = (c) => {
    setMovies(movies.filter((elt) => elt.Title.toLowerCase().includes(c.toLowerCase())))
  }

  return (
    <BrowserRouter>

      <NavbarCustom onSearch={onSearch} />


      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/MoviesList" element={<MoviesList movies={movies} />} />
        <Route path="/MoviesList/:id" element={<About movies={movies} />} />
        <Route path="/Add" element={<Add movies={movies}  addFilm={addFilm}/>} />
        <Route path="*" element={<NotFound/>} />



      </Routes>
    </BrowserRouter>

  );
}

export default App;
