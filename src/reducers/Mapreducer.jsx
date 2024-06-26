const initialState = {
  userLocation: undefined,
  isLoadingMap: true,
};

const Mapreducer = (state = initialState, action) => {
  switch (action.type) {
    case "INITIALIZE_MAP":
      return { ...state, map: action.payload };
    case "SET_USER_LOCATION":
      return { ...state, isLoadingMap: false, userLocation: action.payload };
    default:
      return state;
  }
};

export default Mapreducer;
