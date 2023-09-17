import { configureStore } from "@reduxjs/toolkit";
import sideNavBarReducer from "./features/sideNavBarSlice"
import { TypedUseSelectorHook, useSelector } from "react-redux";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    sideBar: sideNavBarReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = configureStore({
    reducer: {
        persistedReducer
    }
})

export const persistorStore = persistStore(store)

export type RootState = ReturnType<typeof persistorStore.getState>
export type AppDispatch = typeof persistorStore.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;