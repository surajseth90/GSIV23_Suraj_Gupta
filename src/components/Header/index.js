import "./style.scss";
import SearchIcon from "../../assets/search.svg";
import HomeIcon from "../../assets/home.svg";
import { useState } from "react";

function Header() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="home-screen-header">
      <div className="search-bar">
        <img className="icon" src={SearchIcon} />

        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
          className="search-input"
        />
      </div>

      <button
        className="home-button button-icon"
        aria-label="home"
        title="home"
        onClick={() => {
          alert("Home Button Clicked");
        }}
      >
        <img className="icon" src={HomeIcon} />
      </button>
    </header>
  );
}

export default Header;
