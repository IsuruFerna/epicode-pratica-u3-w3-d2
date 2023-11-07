import { ADD_TO_FAVOURITE } from "../actions";

const initialState = {
   favourites: [],
};

const favouritesReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_TO_FAVOURITE:
         return {
            ...state,
            favourites: [...state.favourites, action.payload],
         };

      case "REMOVE_FROM_FAVOURITE":
         return {
            ...state,
            companies: {
               ...state.companies,
               favourite: state.companies.favourite.filter(
                  (company, i) => i !== action.payload
               ),
            },
         };

      default:
         return state;
   }
};

export default favouritesReducer;
