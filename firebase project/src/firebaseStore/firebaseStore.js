import { configureStore } from "@reduxjs/toolkit";
import McqsSlice from "../assests/firebaseSlices/McqsSlice";


export const store = configureStore({
    reducer:{
        mcqs: McqsSlice
    }
})