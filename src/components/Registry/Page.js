import React from 'react';
import ListWidget from './widgets/ListWidget';
import FilterWidget from './widgets/FilterWidget';
import ActionsPanel from './ActionsPanel';
import './Page.css'
import SearchWidget from './widgets/SearchWidget';
import {Provider} from 'react-redux';
import { configureStore, createSlice } from '@reduxjs/toolkit'
import { ContextProvider} from '../../ContextProvider';

import searchSlice from './stores/SearchSlice';
import filterSlice from "./stores/FilterSlice";

import peopleSlice from "./stores/PeopleSlice";
import tasksSlice from "./stores/TasksSlice";
import contactsSlice from "./stores/ContactsSlice";

import PeopleProvider from './data/PeopleProvider';
import TasksProvider from './data/TasksProvider';
import ContactsProvider from './data/ContactsProvider';

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



    const peopleProvider = new PeopleProvider();
    const peopleList = peopleProvider.query();

    const tasksProvider = new TasksProvider();
    const tasksList = tasksProvider.query();

    const contactsProvider = new ContactsProvider();
    const contactsList = contactsProvider.query();


    const store1 = configureStore({
        reducer: {
            filter: filterSlice.reducer,
            search: searchSlice.reducer,
            people: peopleSlice.reducer,
            tasks: tasksSlice.reducer,
            contacts:  contactsSlice.reducer
        },
        preloadedState: {
            search: {
                values: {}
            },
            filter: {
                done: true
            },
            people: {
                items: [...peopleList],
                searchName: 'search1'
            },
            tasks: {
                items: [...tasksList],
                searchName: 'search2'
            },
            contacts: {
                items: [...contactsList],
                searchName: 'search2'
            }
        }
    });

    return (

        <div className="demo-page">
            <div className="demo-page__wrapper">
                <Provider store={store}>
                    <ContextProvider store={store1}>
                        <div className="demo-page__blocklayout">
                            <div className="demo-page__block">

                                <div className="demo-page__header">
                                    <SearchWidget name="search1"/>
                                    <FilterWidget/>
                                </div>
                                <div className="demo-page__toolbar">
                                    <ActionsPanel/>
                                </div>
                                <div className="demo-page__listcontainer">
                                    <ListWidget name="people"/>
                                </div>
                            </div>

                            <div className="demo-page__block">

                                <div className="demo-page__header">
                                    <SearchWidget name="search2"/>
                                    <FilterWidget/>
                                </div>
                                <div className="demo-page__toolbar">
                                    <ActionsPanel/>
                                </div>

                                <div className="demo-page__listcontainer">
                                    <ListWidget name="tasks"/>
                                </div>
                                <div className="demo-page__listcontainer">
                                    <ListWidget name="contacts"/>
                                </div>
                            </div>
                        </div>
                    </ContextProvider>
                </Provider>
            </div>

        </div>

    );
}

export default Page;
