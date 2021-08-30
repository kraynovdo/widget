import { createSlice } from "@reduxjs/toolkit";

import { actions as searchActions } from "./SearchSlice";

import TasksProvider from "../data/TasksProvider";



const myTasksProvider = new TasksProvider();



const tasksSlice = createSlice({
    name: "list",
    initialState: {
        items: {}
    },
    reducers: {

    },
    extraReducers: {
        [searchActions.changeSearch] : (state, action) => {

            if (action.payload.name === state.searchName) {
                state.items = myTasksProvider.searchQuery(action.payload.value)
            }
        }
    }
});

export default tasksSlice;
export const actions = tasksSlice.actions;