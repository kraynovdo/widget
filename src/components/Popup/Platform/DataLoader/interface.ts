import {Reducer} from 'redux';
import {ActionCreatorWithPayload} from '@reduxjs/toolkit';
import {IRecordLoaderConfig} from './recordProvider';
import {IListLoaderConfig} from './listProvider';

export interface ILoaderProviderResult {
    initialData: {
        reducer: Reducer,
        preloadedState: Record<string, unknown>
    },
    prefetchData: {
        promise: Promise<unknown>,
        updateAction: ActionCreatorWithPayload<unknown, string>
    }
}
export type TLoaderConfig = IRecordLoaderConfig | IListLoaderConfig;
export type TLoaderProvider = (cfg: TLoaderConfig) => ILoaderProviderResult;