import { createSlice } from "@reduxjs/toolkit";

import { actions as searchActions } from "./SearchSlice";

import ContactsProvider from "../data/ContactsProvider";



const myContactsProvider = new ContactsProvider();



const contactsSlice = createSlice({
    name: "list",
    initialState: {
        items: {}
    },
    reducers: {

    },
    extraReducers: {
        [searchActions.changeSearch] : (state, action) => {

            if (action.payload.name === state.searchName) {
                state.items = myContactsProvider.searchQuery(action.payload.value)
            }
        }
    }
});

export default contactsSlice;
export const actions = contactsSlice.actions;