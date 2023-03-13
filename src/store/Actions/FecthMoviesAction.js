import axios from "axios";
import { LOADING, SET_MOVIES_DATA, SET_SEARCH } from "../constants";

export const fetchMovies = () => async (dispatch) => {
  dispatch({
    type: LOADING,
  });
  try {
    const json = await axios.get("CONTENTLISTINGPAGE-PAGE2.json");
    dispatch({
      type: SET_MOVIES_DATA,
      payload: json?.data?.page?.["content-items"]?.content,
    });
  } catch (e) {
    dispatch({
      type: LOADING,
      payload: { loading: false },
    });
  }
};

export const setSearch = (data) => {
  return { type: SET_SEARCH, payload: {...data} };
};
