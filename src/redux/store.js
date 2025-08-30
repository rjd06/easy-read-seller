import { configureStore } from "@reduxjs/toolkit";
import sellerReducer from "./features/sellerSlice.js";
const store = configureStore({
    reducer:{
        seller: sellerReducer
    }
});

export {store};