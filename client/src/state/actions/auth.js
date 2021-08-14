import api from "../../api";
/* import { setGlobalMessage } from "./globalMessage"; */
import {
  SIGNUP_SUCCESS,
  AUTH_ERROR,
  ACCOUNT_LOADED,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "./types";

import errorHandler from "../../utils/errorHandler";

// Load User
export const loadAccount = () => async (dispatch) => {
  try {
    const res = await api.fetchAccount();
    dispatch({
      type: ACCOUNT_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

// Signup user
export const signup = (email, password) => async (dispatch) => {
  try {
    const res = await api.signup(email, password);
    dispatch({ type: SIGNUP_SUCCESS, payload: res });
    window.scrollTo({ top: 0, behavior: "smooth" });
  } catch (error) {
    errorHandler(dispatch, error);
    dispatch({ type: AUTH_ERROR });
    /* error handler */
  }
};

// Login User
export const login = (email, password) => async (dispatch) => {
  try {
    const res = await api.login(email, password);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    errorHandler(dispatch, error);
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

// Logout
export const logout = () => async (dispatch) => {
  try {
    await api.logout();
    dispatch({
      type: LOGOUT,
    });
  } catch (error) {
    errorHandler(dispatch, error);
  }
};
