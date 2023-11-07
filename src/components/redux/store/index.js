import { configureStore, combineReducers } from "@reduxjs/toolkit";
import favouritesReducer from "../reducer/favourite";
import searchReducer from "../reducer/searched";

const bigReducer = combineReducers({
   favourite: favouritesReducer,
   searched: searchReducer,
});

const store = configureStore({
   reducer: bigReducer,
});

export default store;
