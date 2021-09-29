import { createSlice } from "@reduxjs/toolkit";
import ViewMode from "../ViewMode";



const viewSlice = createSlice({
    name: "list",
    initialState: {
        items: {}
    },
    reducers: {
        changeViewMode: {
            reducer(state, action) {
                state.viewMode = action.payload;
            }
        }
    },
});

export default viewSlice;
export const actions = viewSlice.actions;