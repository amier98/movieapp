import logo from "./logo.svg";
import "./App.css";
import React, { createContext, useState } from "react";
import { useEffect } from "react";
import Movies from "./components/Movies";
import FilterMovies from "./components/FilterMovies";

export const movieContext = createContext();
export const filterContext = createContext();

function App() {
  const [popularMovies,setPopularMovies] = useState();
  const [filteredMovie, setFilteredMovie] = useState();
  const [genres, setGenres] = useState();

  const movies = async () => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=327457272e7557b59a66a71708203eb4&language=en-US&page=1"
    )
      .then((response) => response.json())
      .then((data) => {
       setPopularMovies(data.results);
      })
      .catch((error) => console.log(error));
  };

  const genre = async () => {
    fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=327457272e7557b59a66a71708203eb4&language=en")
  
  .then((response) => response.json())
  .then((data) => {
    setGenres(data.genres);
    console.log(data)
  })
  .catch((error) => console.log(error))

  }

  useEffect(() => {
    movies();
    genre();
  }, []);

  const value = {
    popularMovies,
    filteredMovie,
    setFilteredMovie
  };

  const filterValue = {
    genres,
  }

  return (
    <movieContext.Provider value={value}>
      <filterContext.Provider value={filterValue}>
        <FilterMovies />
        <div className="movieContainer">
        <Movies />
        </div>
        </filterContext.Provider>
    </movieContext.Provider>
  );
}

export default App;
