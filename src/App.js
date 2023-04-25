import React, { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";
//67ca1ad1 API Key

const API_URL = "http://www.omdbapi.com?apikey=67ca1ad1";
const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchItem, setSearchItem] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };
  useEffect(() => {
    searchMovies("Spiderman");
  }, []);

  return (
    <div className="app">
      <h1>Movie Land</h1>
      <div className="search">
        <input
          placeholder="Search movies"
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
        />

        <img src={SearchIcon} alt="search" onClick={() => searchMovies} />
      </div>

      {movies?.length > 0 
      ? 
      (
        <div className="container">
          {movies.map((movie,index) => (
            <MovieCard
              key={index}
              movie={movie}
            />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h1>No Movies Here</h1>
        </div>
      )}
    </div>
  );
};
export default App;
