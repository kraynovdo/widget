import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {
        values: {}
    },
    reducers: {
        changeSearch: {
            reducer(state, action) {
                if (!state.values[action.payload.name]) {
                    state.values[action.payload.name] = '';
                }
                state.values[action.payload.name] = action.payload.value;
            },
            prepare(meta) {
                return {
                    payload: meta
                };
            }
        }
    }
});

export default searchSlice;
export const actions = searchSlice.actions;