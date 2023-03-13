import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies } from "../store/Actions/FecthMoviesAction";
import "./common.css";

const Movies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);
  const moviesData = useSelector((state) => state.data.movies);
  const filteredMovies = useSelector((state) => state.data.filteredMovies);
  const searchString = useSelector((state) => state.data.searchString);
  const required = searchString ? filteredMovies : moviesData;

  return (
    <div className="grid grid-cols-3 lg:grid-cols-4 gridGap">
      {required.map((obj, index) => (
        <div key={`${obj.name}${index}`} className="grid-item">
          <div>
            <div className="pb-6">
              <img
                src={`${process.env.PUBLIC_URL}/${obj["poster-image"]}`}
                alt="Logo"
              />
            </div>
            <div>{obj.name}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Movies;
