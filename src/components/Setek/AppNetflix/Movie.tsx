import { useState } from "react";

// komponenty
import MovieDelButton from "./MovieDelButton";
import AllDelButton from "./AllDelButton";
import ReloadMovieButton from "./ReloadMovieButton";

// dáta
import allMovies from "./data";

// štýly
import './Movie.scss'

const Movie = () => {
  const [movieList, setMovieList] = useState(allMovies);

  const deleteMovie = (id: number) => {
    const filteredMovies = movieList.filter((oneMovie) => {
      return oneMovie.id !== id;
    });
    setMovieList(filteredMovies);
  };

  const delAllMovies = () => setMovieList([]);

  const reloadMovies = () => setMovieList(allMovies);

  return (
    <section className="">
      <div className="all-movies">
        {movieList.map((oneMovie) => {
          const { id, image, title, age, tags, description } = oneMovie;

          return (
            <div className="one-movie">
              <img src={image} alt="" />
              <h2>{title}</h2>
              <p>{age}</p>
              <p>{tags}</p>
              <p>{description}</p>
              <MovieDelButton deleteMovie = {() => deleteMovie(id)} />
            </div>
          );
        })}
      </div>
      <div className="button-box">
        <AllDelButton delAllMovies = {delAllMovies} />
        <ReloadMovieButton reloadMovies = {reloadMovies} />
      </div>
    </section>
  );
};

export default Movie;
