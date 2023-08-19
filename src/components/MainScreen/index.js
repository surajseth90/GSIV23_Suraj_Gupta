import { useEffect } from "react";
import "./style.scss";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../actions";
import Header from "../Header";
import Footer from "../Footer";

function Main() {
  const dispatch = useDispatch();
  const moviesList = useSelector((state) => state.moviesList);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = () => {
    const movies = [
      {
        id: 1,
        title: "Spider Man",
        rating: 4.5,
        description: "lorem ",
      },
      {
        id: 2,
        title: "Spider Man 2",
        rating: 4.1,
        description: "lorem ",
      },
      {
        id: 3,
        title: "Spider Man 3",
        rating: 4,
        description: "lorem ",
      },
      {
        id: 4,
        title: "Avengers",
        rating: 4.1,
        description: "lorem ",
      },
      {
        id: 5,
        title: "Iron Man",
        rating: 4,
        description: "lorem ",
      },
      {
        id: 6,
        title: "Avengers End Game",
        rating: 5,
        description: "lorem ",
      },
    ];

    dispatch(actions.setMovieList(movies));
  };

  return (
    <>
      {moviesList.length > 0 ? (
        <>
          <Header />
          <div className="movies-wrapper">
            <ul className="movies-container" tabIndex={0}>
              {moviesList &&
                moviesList.map((movie) => (
                  <li key={movie.id} className="movie-card">
                    <button
                      className="movie-card-button"
                      tabIndex={0}
                      aria-label={movie.title}
                    >
                      <div className="movie-info" aria-hidden>
                        <div className="movie-info-row">
                          <h4 className="movie-title">{movie.title}</h4>
                          <p className="movie-rating">
                            {movie.rating.toFixed(1)}
                          </p>
                        </div>
                        <div className="movie-info-row">
                          <span className="movie-description">
                            {movie.description}
                          </span>
                        </div>
                      </div>
                    </button>
                  </li>
                ))}
            </ul>
          </div>
          {<Footer />}
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
