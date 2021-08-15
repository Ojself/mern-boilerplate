import { SET_GLOBALMESSAGE, REMOVE_GLOBALMESSAGE } from "../actions/types";

const reducer = (state = { style: "danger", message: "" }, action) => {
  if (state.timeoutId) clearTimeout(state.timeoutId);

  switch (action.type) {
    case SET_GLOBALMESSAGE:
      return (state = action.payload);
    case REMOVE_GLOBALMESSAGE:
      return (state = {});
    default:
      return state;
  }
};

export default reducer;
