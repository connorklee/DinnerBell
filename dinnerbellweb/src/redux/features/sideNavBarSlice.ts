import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
    value: SideNavBarState;
}

type SideNavBarState = {
    isCollasped: boolean;
}

const initialState = {
    value: {
        isCollasped: false,
    } as SideNavBarState,
} as InitialState;

export const sideNavBarSlice = createSlice({
    name: "sideNavBar",
    initialState,
    reducers: {
        toggleMenu: (state) => {
            state.value.isCollasped = !state.value.isCollasped;
        }
    }
});

export const { toggleMenu } = sideNavBarSlice.actions
export default sideNavBarSlice.reducer;