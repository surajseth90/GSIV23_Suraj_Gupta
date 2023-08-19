import "./style.scss";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../actions";
import PrevIcon from "../../assets/left.svg";
import NextIcon from "../../assets/right.svg";

function Footer(props) {
  const currentPage = useSelector((state) => state.currentPage);
  const isLoading = useSelector((state) => state.isLoading);
  const moviesList = useSelector((state) => state.moviesList);
  const totalPages = useSelector((state) => state.totalPage);

  const dispatch = useDispatch();
  return (
    <footer>
      <div className="pagination">
        <button
          onClick={() => {
            let page = currentPage - 1;
            dispatch(actions.setCurrentPage(page));
            props.fetchMovies(page);
          }}
          disabled={currentPage === 1}
          className="button-icon"
          title="previous page"
          aria-label="previous page"
          tabIndex={0}
        >
          <img className="icon" src={PrevIcon} />
        </button>
        {isLoading && moviesList.length > 0 && <div className="loader"></div>}

        <button
          onClick={() => {
            let page = currentPage + 1;
            dispatch(actions.setCurrentPage(page));
            props.fetchMovies(page);
          }}
          disabled={currentPage === totalPages}
          className="button-icon"
          aria-label="next page"
          title="next page"
          tabIndex={0}
        >
          <img className="icon" src={NextIcon} />
        </button>
      </div>
    </footer>
  );
}

export default Footer;
