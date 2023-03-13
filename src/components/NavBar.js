import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSearch } from "../store/Actions/FecthMoviesAction";
import "./common.css";

const NavBar = () => {
  const [scroll, setScroll] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const navigate = useNavigate();

  const title = "Romantic Comedy";
  const dispatch = useDispatch();

  useEffect(() => {
    // indentify scroll
    window.addEventListener("scroll", handleScroll);

    // shows and hides search bar
    document.body.addEventListener("click", handleBodyCick);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("click", handleBodyCick);
    };
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  const handleBodyCick = (e) => {
    if (
      e.target.id === "seachSvg" ||
      e.target.id === "seachDiv" ||
      e.target.id === "svgPath" ||
      e.target.id === "searchInput"
    ) {
      setShowSearch(true);
    } else {
      setShowSearch(false);
    }
  };

  const handleChange = (e) => {
    const payload = { searchString: e.target.value };
    dispatch(setSearch(payload));
  };

  return (
    <nav className={scroll ? "navbar scrolled" : "navbar"}>
      <div className="flex">
        <div className="py-6 pl-7" onClick={() => navigate("/")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            aria-hidden="true"
            className="w-7 h-7 fill-current text-white"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 12h-15m0 0 6.75 6.75M4.5 12l6.75-6.75"
            />
          </svg>
        </div>
        <div className="py-5 px-4 text-2xl">{title}</div>
        <div className="search py-5 pr-7 max-w-6  relative mb-4 flex flex-wrap items-stretch">
          {showSearch && (
            <input
              type="search"
              id="searchInput"
              className="mb-2 text-sm rounded font-large p-2 bg-black border-solid border-2 border-white"
              placeholder="Search"
              aria-label="Search"
              onChange={handleChange}
              aria-describedby="button-addon2"
            />
          )}
          <div id="seachDiv">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              id="seachSvg"
              className="searchButton w-6 h-6 my-1.5 ml-2"
              viewBox="0 0 24 24"
            >
              <path
                id="svgPath"
                d="m16.32 14.9 5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
              />
            </svg>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
