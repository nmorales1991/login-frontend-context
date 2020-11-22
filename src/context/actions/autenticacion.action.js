export const SET_CURRENT_USER = "SET_CURRENT_USER";

export const setCurrentUser = user => {
  return {
    type: SET_CURRENT_USER,
    payload: user
  };
};

export const logoutUser = (dispatch) => {
  localStorage.removeItem("jwt");
  dispatch(setCurrentUser({}));
};