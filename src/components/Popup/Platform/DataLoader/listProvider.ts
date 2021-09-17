import ProductsSlice, {actions as ListActions} from '../stores/List';
import {ILoaderProviderResult} from './interface';
import {AbstractSource} from '../data/AbstractSource';

export interface IListLoaderConfig {
   type: 'list';
   source: AbstractSource;
   filter?: Record<string, any>;
}

export default function loadList({source, filter = {}}: IListLoaderConfig): ILoaderProviderResult {
   const promiseResult = source.query(filter);
   return {
      initialData: {
         reducer: ProductsSlice.reducer,
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
};
