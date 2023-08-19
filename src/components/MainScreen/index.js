import { useEffect, useState } from "react";
import "./style.scss";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../actions";
import Header from "../Header";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";

function Main() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [noSearchResult, setNoSearchResult] = useState(false);
  const currentPage = useSelector((state) => state.currentPage);
  const moviesList = useSelector((state) => state.moviesList);
  const searchQuery = useSelector((state) => state.searchQuery);
  const apiKey = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    if (searchQuery.trim() === "") {
      fetchMovies(currentPage);
    } else {
      fetchMovies(currentPage);
    }
  }, [searchQuery]);

  const fetchMovies = async (page) => {
    const isSearching = searchQuery.trim() !== "";
    dispatch(actions.setIsLoading(true));
    const url = isSearching
      ? `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchQuery}&page=${page}&language=en-US`
      : `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&page=${page}&language=en-US`;
    try {
      const response = await axios.get(url);
      const results = response.data.results.sort(
        (a, b) => new Date(b.release_date) - new Date(a.release_date)
      );
      if (isSearching && results.length == 0) {
        setNoSearchResult(true);
        setTimeout(() => {
          document.getElementsByClassName("search-input")[0].focus();
        }, 100);
      } else {
        setNoSearchResult(false);
      }
      dispatch(actions.setMovieList(results));
      dispatch(actions.setTotalPages(response.data.total_pages));
      dispatch(actions.setIsLoading(false));
    } catch (error) {
      console.error("Error fetching movies:", error);
      dispatch(actions.setIsLoading(false));
    }
  };

  return (
    <>
      {moviesList.length > 0 || noSearchResult ? (
        <>
          <Header fetchMovies={fetchMovies} />
          <div className="movies-wrapper">
            {noSearchResult ? (
              <div className="no-result-found">
                <h1>No Results Found....</h1>
              </div>
            ) : (
              <ul className="movies-container" tabIndex={0}>
                {moviesList &&
                  moviesList.map((movie) => (
                    <li key={movie.id} className="movie-card">
                      <button
                        className="movie-card-button"
                        tabIndex={0}
                        onClick={() => {
                          dispatch(actions.setSelectedMovieId(movie.id));
                          navigate("/detail");
                        }}
                        aria-label={movie.title}
                      >
                        <img
                          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                          alt={`${movie.title}`}
                          className="movie-image"
                          aria-hidden
                        />
                        <div className="movie-info" aria-hidden>
                          <div className="movie-info-row">
                            <h4 className="movie-title">{movie.title}</h4>
                            <p className="movie-rating">
                              {movie.vote_average.toFixed(1)}
                            </p>
                          </div>
                          <div className="movie-info-row">
                            <span className="movie-description">
                              {movie.overview}
                            </span>
                          </div>
                        </div>
                      </button>
                    </li>
                  ))}
              </ul>
            )}
          </div>
          {!noSearchResult && <Footer fetchMovies={fetchMovies} />}
        </>
      ) : (
        <div className="overlay">
          <div className="main-loader"></div>
        </div>
      )}
    </>
  );
}

export default Main;
