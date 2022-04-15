//creating global stroe--so that we could use in every pages and compponents 
// to use Action and reducer

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartRedux";

export default configureStore({
    reducer:
    {
        cart: cartReducer
    },
});

// carReducer--use this store --we should wrap our application with a provider 
// So ---index.js ma provide