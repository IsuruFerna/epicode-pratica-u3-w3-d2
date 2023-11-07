import { ADD_TO_SEARCHED } from "../actions";

const initialState = {
   searchedList: {
      data: [],
   },
};

const searchReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_TO_SEARCHED:
         return {
            ...state,
            searchedList: action.payload,
         };

      default:
         return state;
   }
};

export default searchReducer;
