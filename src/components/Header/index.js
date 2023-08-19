import "./style.scss";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../actions";
import SearchIcon from "../../assets/search.svg";
import HomeIcon from "../../assets/home.svg";
import { useNavigate } from "react-router-dom";

function Header(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchQuery = useSelector((state) => state.searchQuery);
  const selectedMovieId = useSelector((state) => state.selectedMovieId);

  const homeButtonOnClick = () => {
    if (selectedMovieId === null) {
      dispatch(actions.setCurrentPage(1));
      dispatch(actions.setSearchQuery(""));
      props.fetchMovies(1);
    } else {
      dispatch(actions.setSearchQuery(""));
      navigate("/");
    }
  };

  return (
    <header className="home-screen-header">
      {selectedMovieId === null ? (
        <div
          className="search-bar"
          onClick={() =>
            document.getElementsByClassName("search-input")[0].focus()
          }
        >
          <img className="icon" src={SearchIcon} />

          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => {
              dispatch(actions.setSearchQuery(e.target.value));
              dispatch(actions.setCurrentPage(1));
            }}
            className="search-input"
          />
        </div>
      ) : (
        <div>Movie Details</div>
      )}

      <button
        className="home-button button-icon"
        aria-label="home"
        title="home"
        onClick={homeButtonOnClick}
      >
        <img className="icon" src={HomeIcon} />
      </button>
    </header>
  );
}

export default Header;
