import axios from "axios";
import {
  appLoading,
  appDoneLoading,
  showMessageWithTimeout,
  setMessage,
} from "../appState/actions";
import { selectUser, selectToken } from "../user/selectors";
import { apiUrl } from "../../config/constants";

export const STORY_POST_SUCCESS = "STORY_POST_SUCCESS";
export const SPACE_UPDATED = "SPACE_UPDATED";

export const startLoading = () => {
  return {
    type: "homepage/startLoading",
  };
};

export const spacesFetched = (data) => {
  return {
    type: "homepage/spacesFetched",
    payload: data,
  };
};

export const spacesById = (data) => {
  return {
    type: "detailsPage/spacesFetched",
    payload: data,
  };
};
export function fetchSpaces() {
  return async (dispatch, getState) => {
    dispatch(startLoading);
    try {
      const response = await axios.get(`${apiUrl}/spaces`);
      dispatch(spacesFetched(response.data));
    } catch (e) {
      console.log(e.message);
    }
  };
}

export function spaceById(id) {
  return async (dispatch, getState) => {
    dispatch(startLoading);
    try {
      const response = await axios.get(`${apiUrl}/spaces/${id}`);
      dispatch(spacesById(response.data)); // { a space }
    } catch (e) {
      console.log(e.message);
    }
  };
}
