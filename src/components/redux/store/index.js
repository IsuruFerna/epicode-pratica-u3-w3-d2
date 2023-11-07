import { configureStore, combineReducers } from "@reduxjs/toolkit";
import favouritesReducer from "../reducer/favourite";

const bigReducer = combineReducers({
   favourite: favouritesReducer,
});

const store = configureStore({
   reducer: bigReducer,
});

export default store;
