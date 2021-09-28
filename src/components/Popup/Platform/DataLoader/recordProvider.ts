import RecordSlice, {actions as RecordActions} from '../stores/Record';
import {ILoaderProviderResult} from './interface';
import {AbstractSource} from '../data/AbstractSource';

export interface IRecordLoaderConfig {
   type: 'record';
   key: string | number;
   source: AbstractSource<any>;
   record?: Record<string, any>;
}

const provider = {
   load({source, key, record}: IRecordLoaderConfig): ILoaderProviderResult {
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
}
}

export default provider;
