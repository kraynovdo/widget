import RecordSlice, {actions as RecordActions} from '../stores/Record';
import {ILoaderProviderResult} from './interface';
import {AbstractSource} from '../data/AbstractSource';

export interface IRecordLoaderConfig {
   type: 'record';
   key?: string | number;
   source: AbstractSource;
   record?: Record<string, any>;
}

export default function loadEditDialog({source, key, record}: IRecordLoaderConfig): ILoaderProviderResult {
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
