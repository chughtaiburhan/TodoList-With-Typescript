import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../Reducer/TodoSlice";

export const store = configureStore({
    reducer:{
        todos:todoReducer,
    },
});

// Define RootState and AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;