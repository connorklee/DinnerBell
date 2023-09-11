import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import sideNavBarReducer from "./features/sideNavBarSlice"
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const store = configureStore({
    reducer: {
        sideNavBarReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;