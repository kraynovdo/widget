import ProductsSlice, {actions as ListActions} from '../stores/List';

export default function loadList({source, filter = {}}) {
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
