import React, { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";
//67ca1ad1 API Key

const API_URL = "http://www.omdbapi.com?apikey=67ca1ad1"; 
const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchItem , setSearchItem] = useState('');
  const [items, setItems] = useState([]);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data.Search);
  };
  useEffect( () =>  {
    searchMovies('Spiderman')
  }, []);

//  if(items.length == 0)
//   return <div>nothing</div>
 
  return (
    <div className="app">
      <h1>Movie Land</h1>
      <div className="search">
        <input
          placeholder="Search movies"
          value= {searchItem}
          onChange={(e) => setSearchItem(e.target.value)
        }
        />
        
        <img 
        src={SearchIcon} 
        alt="search" 
        onClick={() => searchMovies} 
        />
      </div>
      {
            items.map((e,index)=>{
                return(
                    <MovieCard key={index} title={e.title} image={items.image} category={items.category}/>
                ) 
                })
                
      }
      {/* <MovieCard key={items[0].id} items={items[0]}/> */}
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} items={items}/>
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
 