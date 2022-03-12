import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";
import "bootstrap/dist/bootstrap-icons/bootstrap-icons.css";
import "./App.css";
import MovieList from "./movies/MovieList";
import Filter from "./movies/Filter";
import { Lists } from "./datas/movies";
import { Routes, Route } from "react-router-dom";
import Detail from "./movies/Detail";

const AppComponent = () => {
  const [movies, setMovies] = useState(Lists);
  const [keyword, setKeyword] = useState("");

  const addMovie = (movie) => {
    const newMoviesList = [...movies, movie];
    setMovies(newMoviesList);
  };
  const removeMovie = (title) => {
    const newMoviesList = movies.filter(movie=>movie.title != title)
    setMovies(newMoviesList);
  };
  const handleSearch = () => {
    return keyword
      ? movies.filter(
          (movie) =>
            movie.title.toLowerCase().includes(keyword.toLowerCase()) ||
            movie.rate == keyword
        )
      : movies;
  };
  const moviesFiltered = handleSearch();

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
              <Filter keyword={keyword} setKeyword={setKeyword} />
            <MovieList Lists={moviesFiltered} add={addMovie}  remove = {removeMovie} />
          </div>
        }
      />
      <Route
        path="/detail/:id"
        element={
          <div>
            <Detail Lists={moviesFiltered}/>
          </div>
        }
      />
    </Routes>
  );
};

const App = React.memo(AppComponent)
export default App;
