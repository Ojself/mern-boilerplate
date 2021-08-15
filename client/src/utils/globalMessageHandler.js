import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";

const globalMessageHandler = (dispatch, message, style = "success") => {
  const { setGlobalMessage } = bindActionCreators(actionCreators, dispatch);
  setGlobalMessage({
    message,
    style,
  });
};
export default globalMessageHandler;
