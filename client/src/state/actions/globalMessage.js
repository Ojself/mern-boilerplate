import { SET_GLOBALMESSAGE, REMOVE_GLOBALMESSAGE } from "./types";

/**
 * @param {Object} globalMessage - The global message object
 * @param {String} globalMessage.message - The message to display
 * @param {String} globalMessage.style - The style of the message (defaults to 'danger')}
 */

export const setGlobalMessage = (globalMessage) => {
  return (dispatch) => {
    const timeoutId = setTimeout(() => {
      dispatch({
        type: REMOVE_GLOBALMESSAGE,
        payload: {},
      });
    }, 5000);
    globalMessage.timeoutId = timeoutId;

    dispatch({
      type: SET_GLOBALMESSAGE,
      payload: globalMessage,
    });
  };
};
