import "./style.scss";
import PrevIcon from "../../assets/left.svg";
import NextIcon from "../../assets/right.svg";

function Footer() {
  return (
    <footer>
      <div className="pagination">
        <button
          className="button-icon"
          title="previous page"
          aria-label="previous page"
          tabIndex={0}
        >
          <img className="icon" src={PrevIcon} />
        </button>

        <button
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
