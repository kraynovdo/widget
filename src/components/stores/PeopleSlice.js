import { createSlice } from "@reduxjs/toolkit";

import { actions as searchActions } from "./SearchSlice";

import PeopleProvider from "../data/PeopleProvider";



const myPeopleProvider = new PeopleProvider();



const peopleSlice = createSlice({
    name: "list",
    initialState: {
        items: {}
    },
    reducers: {

    },
    extraReducers: {
        [searchActions.changeSearch] : (state, action) => {

            if (action.payload.name === state.searchName) {
                state.items = myPeopleProvider.searchQuery(action.payload.value)
            }
        }
    }
});

export default peopleSlice;
export const actions = peopleSlice.actions;