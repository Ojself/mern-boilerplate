import {
  SIGNUP_SUCCESS,
  ACCOUNT_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGOUT,
} from "../actions/types";

const initialState = {
  isAuthenticated: null,
  loading: true,
  account: null,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ACCOUNT_LOADED: {
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        account: payload,
      };
    }
    case SIGNUP_SUCCESS:
    case LOGIN_SUCCESS:
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
      };
    case AUTH_ERROR:
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        account: null,
      };
    default:
      return state;
  }
};

export default reducer;
