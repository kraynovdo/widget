import React from 'react';
import ListWidget from './ListWidget';
import FilterWidget from './FilterWidget';
import ActionsPanel from './ActionsPanel';
import './Page.css'
import SearchWidget from './SearchWidget';
import {Provider} from 'react-redux';
import { configureStore, createSlice } from '@reduxjs/toolkit'
import { ContextProvider} from './ContextProvider';
import searchSlice from './SearchSlice';
import filterSlice from "./FilterSlice";
import listSlice from "./ListSlice";

import DataLoader from "./DataLoader";


function Page() {

    /*USER INFO*/

    const userInfoSlice = createSlice({
        name: "userInfo",
        initialState: {
            name: "Федор",
            surname: "Федоров"
        },
        reducers: {}
    });

    const store = configureStore({
        reducer: {
            userInfo: userInfoSlice.reducer
        }
    });



    const myDataLoader = new DataLoader();

    const store1 = configureStore({
        reducer: {
            filter: filterSlice.reducer,
            search: searchSlice.reducer,
            list: listSlice.reducer
        },
        preloadedState: {
            search: {
                value: ""
            },
            filter: {
                done: true
            },
            list: {
                items: myDataLoader.query()
            }
        }
    });

    return (
        <Provider store={store}>
            <div className="demo-page">
                <ContextProvider store={store1}>
                    <div className="demo-page__wrapper">
                        <div className="demo-page__header">
                            <SearchWidget/>
                            <FilterWidget/>
                        </div>
                        <div className="demo-page__toolbar">
                            <ActionsPanel/>
                        </div>
                        <ListWidget/>
                    </div>
                </ContextProvider>
            </div>
        </Provider>
    );
}

export default Page;
