import RecordSlice, {actions as RecordActions} from '../stores/Record';

export default function loadEditDialog({source, key, record}) {
   const promiseResult = source.read(key);
   return {
      initialData: {
         reducer: RecordSlice.reducer,
         preloadedState: {
            record,
            source
         }
      },
      prefetchData: {
         promise: promiseResult,
         updateAction: RecordActions.changeRecord
      }
   }
};
