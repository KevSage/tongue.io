const initialState = {
  user: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      debugger;
      return { ...state, user: action.data.user };
    default:
      return state;
  }
};
