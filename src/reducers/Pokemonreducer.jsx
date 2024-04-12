const initialState = {
  data: [],
  isLoading: false,
  evolutions: [],
  especies: [],
  error: null,
};

// Define the reducer
const Pokemonreducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DATA":
      return { ...state, data: action.payload };
    case "FETCH_EVOLUTIONS":
      return { ...state, evolutions: action.payload };
      case "FETCH_SPECIES":
        return { ...state, especies: action.payload };
    default:
      return state;
  }
};

export default Pokemonreducer;
