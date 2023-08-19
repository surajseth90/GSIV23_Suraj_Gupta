import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Header from "../Header";
import { useEffect, useState } from "react";
import * as actions from "../../actions";

function DetailPage() {
  const selectedMovieId = useSelector((state) => state.selectedMovieId);
  const [movie, setMovie] = useState({});
  const apiKey = process.env.REACT_APP_API_KEY;
  const dispatch = useDispatch();

  useEffect(() => {
    movieDetails(selectedMovieId);
    return () => dispatch(actions.setSelectedMovieId(null));
  }, [selectedMovieId]);

  const movieDetails = async (id) => {
    const [movieResponse, creditsResponse] = await Promise.all([
      axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
      ),
      axios.get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}`
      ),
    ]);
    const director =
      creditsResponse.data.crew.find((member) => member.job === "Director")
        ?.name || "Unknown Director";
    const actors = creditsResponse.data.cast.map((actor) => actor.name);
    let obj = { ...movieResponse.data };
    obj.releaseYear = movieResponse.data.release_date.split("-")[0];
    obj.actors = actors;
    obj.director = director;
    obj.time = {
      minutes: movieResponse.data.runtime % 60,
      hours: Math.floor(movieResponse.data.runtime / 60),
    };
    setMovie(obj);
  };

  return (
    <>
      <Header />
      {movie.title && movie.title.length > 0 ? (
        <div className="detail-screen">
          <div className="image-container">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={`${movie?.title} Image`}
              className="movie-image"
            />
          </div>
          <div className="movie-info">
            <div className="movie-info-row">
              <span className="movie-title">
                <b> {movie?.title}</b> ({movie?.vote_average})
              </span>
            </div>
            <div className="movie-info-row">
              <span>{movie?.releaseYear}</span> |
              <span> {`${movie?.time?.hours}:${movie?.time?.minutes}`}</span> |
              <span> {movie?.director}</span>
            </div>
            <div className="movie-info-row">
              <span className="movie-description">
                Cast: {movie?.actors?.join(",")}
              </span>
            </div>
            <div className="movie-info-row">
              <span className="movie-description">
                Description: {movie?.overview}
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div className="overlay">
          <div className="main-loader"></div>
        </div>
      )}
    </>
  );
}

export default DetailPage;
