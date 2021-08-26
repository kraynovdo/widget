import { createSlice } from "@reduxjs/toolkit";

import DataLoader from "./DataLoader";

const myDataLoader = new DataLoader();

const listSlice = createSlice({
    name: "list",
    initialState: {
        items: []
    },
    reducers: {
        changeSearch: {
            reducer(state, action) {
                state.items = myDataLoader.searchQuery(action.payload)
            },
            prepare(value) {
                return {
                    payload: value
                };
            }
        }
    }
});

export default listSlice;
export const actions = listSlice.actions;