import "./App.css";
import MoviesTable from "./components/MoviesTable";
import { useState } from "react";
import { TextField, Typography, Box } from "@mui/material";
import { useEffect } from "react";
import SortMovies from "./components/SortMovies";
import movieLogo from "./assets/Movie-Projector-Icon.svg";

function App() {
  const [moviesData, setMoviesData] = useState();
  const [movieTitle, setMovieTitle] = useState();
  const [errorText, setErrorText] = useState();
  const [movieType, setmovieType] = useState("");

  const handleTypeChange = (event) => {
    setmovieType(event.target.value);
    fetchMovieData(movieTitle, event.target.value);
  };

  const onInputChange = (event) => {
    setErrorText("");
    setMovieTitle(event.target.value);
    fetchMovieData(event.target.value, undefined);
  };

  useEffect(() => {
    setErrorText("");
  }, []);

  const fetchMovieData = (title, type) => {
    fetch(!type ? `http://www.omdbapi.com/?apikey=748baf9c&s=${title}` : `http://www.omdbapi.com/?apikey=748baf9c&s=${title}&type=${type}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.Error) {
          setErrorText(data.Error);
        }
        setMoviesData(data.Search);
      });
  };

  return (
    <div className='App'>
      <header id='header' className='app-header'>
        <img src={movieLogo} alt='movie-logo' width='300px' />
      </header>
      <section className='movies-table'>
        <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
          <TextField onChange={onInputChange} id='outlined-basic' label='Search Movies' variant='outlined' />
          <SortMovies movieType={movieType} handleChange={handleTypeChange} />
        </Box>
        <MoviesTable movies={moviesData} />
        {errorText ? <Typography sx={{ marginTop: "20px", textAlign: "center", color: "red" }}>{errorText}</Typography> : null}
      </section>
      <footer id='footer' className='app-footer'>
        <p className='copyright'> React Movie DB practice App © 2023</p>
      </footer>
    </div>
  );
}

export default App;
