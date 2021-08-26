import { createSlice } from "@reduxjs/toolkit";

const filterInitialState = {};
const filterSlice = createSlice({
    name: "filter",
    initialState: filterInitialState,
    reducers: {
        changeFilter: {
            reducer(state, action) {
                state[action.payload.fieldName] = action.payload.value;
            },
            prepare(fieldName, value) {
                return {
                    payload: {
                        fieldName,
                        value
                    }
                };
            }
        },
        resetFilter(state, action) {
            Object.keys(state).forEach((key) => {
                state[key] = false;
            });
        }
    }
});
export const actions = filterSlice.actions;
export default filterSlice;
