const initialState = {
   companies: {
      favourite: [],
   },
};

const mainReducer = (state = initialState, action) => {
   switch (action.type) {
      case "ADD_TO_FAVOURITE":
         return {
            ...state,
            companies: {
               ...state.companies,
               favourite: [...state.companies.favourite, action.payload],
            },
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

export default mainReducer;
