import { combineReducers } from "redux";
import MoviesReducer from "./MoviesReducer";

const reducers = combineReducers({
  data: MoviesReducer,
});

export default reducers;