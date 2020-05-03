export const resetUserMessage = () => {
  return async (dispatch) => {
    dispatch({
      type: "USER_MESSAGE_RESET_SUCCESS",
    });
  };
};

export const registration = (data) => {
  return async (dispatch) => {
    dispatch({
      type: "USER_REGISTRATION_SUCCESS",
      data: data,
    });
  };
};
