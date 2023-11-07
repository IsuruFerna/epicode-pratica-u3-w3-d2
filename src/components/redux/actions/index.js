export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE";
export const ADD_TO_SEARCHED = "ADD_TO_SEARCHED";

export const addToFavourites = (selectedCompany) => {
   return {
      type: ADD_TO_FAVOURITE,
      payload: selectedCompany,
   };
};

export const addToSearched = (searched) => {
   return async (dispatch) => {
      try {
         let res = await fetch(
            "https://strive-benchmark.herokuapp.com/api/jobs?search=" + searched
         );
         if (res.ok) {
            let fetchedSearch = await res.json();
            dispatch({
               type: ADD_TO_SEARCHED,
               payload: fetchedSearch,
            });
         } else {
            throw new Error("searched data retreaving error!");
         }
      } catch (error) {
         console.log(error);
      }
   };
};
