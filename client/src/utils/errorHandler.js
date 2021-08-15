import globalMessageHandler from "./globalMessageHandler";

const errorHandler = (dispatch, error) => {
  console.error("ERROR: \n", JSON.stringify(error));
  const message = error?.message;
  globalMessageHandler(
    dispatch,
    typeof message === "string" ? message : JSON.stringify(message),
    "danger"
  );
};
export default errorHandler;
