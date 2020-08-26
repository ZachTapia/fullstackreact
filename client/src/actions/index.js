import axios from "axios";
import { FETCH_USER } from "./types";

// ACTION CREATOR
export const fetchUser = () => async (dispatch) => {
  const res = await axios.get("/api/current_user");
  // Create Action to send to all reducers
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = (token) => async (dispatch) => {
  const res = await axios.post("/api/stripe", token);

  dispatch({ type: FETCH_USER, payload: res.data });
};
