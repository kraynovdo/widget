import { createSlice } from "@reduxjs/toolkit";


const searchSlice = createSlice({
    name: "search",
    initialState: {
        value: ""
    },
    reducers: {
        changeSearch: {
            reducer(state, action) {
                console.log(state);
                state.value = action.payload;


            },
            prepare(value) {
                return {
                    payload: value
                };
            }
        }
    }
});

export default searchSlice;
export const actions = searchSlice.actions;