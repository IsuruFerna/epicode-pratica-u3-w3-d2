import { ADD_TO_SEARCHED } from "../actions";

const initialState = {
   searched: [],
};

const searchReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_TO_SEARCHED:
         return {
            ...state,
            searched: action.payload,
         };

      default:
         return state;
   }
};

export default searchReducer;
