import ListSlice, {actions as ListActions} from '../stores/List';
import {ILoaderProviderResult} from './interface';
import {AbstractSource} from '../data/AbstractSource';

export interface IListLoaderConfig {
   type: 'list';
   source: AbstractSource;
   filter?: Record<string, any>;
}

const provider = {
   load({source, filter = {}}: IListLoaderConfig): ILoaderProviderResult {
      const promiseResult = source.query(filter);
      return {
         initialData: {
            reducer: ListSlice.reducer,
            preloadedState: {
               items: [],
               source,
               filter
            }
         },
         prefetchData: {
            promise: promiseResult,
            updateAction: ListActions.changeItems
         }
      }
   }
}

export default provider;
