import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";

const errorHandler = (dispatch, error) => {
  console.error("ERROR: \n", JSON.stringify(error));
  const { setGlobalMessage } = bindActionCreators(actionCreators, dispatch);
  const message = error?.message;
  setGlobalMessage({
    style: "danger",
    message: typeof message === "string" ? message : JSON.stringify(message),
  });
};
export default errorHandler;
