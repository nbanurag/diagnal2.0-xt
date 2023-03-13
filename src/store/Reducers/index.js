import { combineReducers } from "redux";
import MoviesReducer from "./MoviesReducer";

const reducers = combineReducers({
  data: MoviesReducer,
  //other reducers come here...
});

export default reducers;