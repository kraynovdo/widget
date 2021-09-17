import RecordProvider from './data/RecordProvider';
import ProductProvider from './data/ProductProvider';
import {IConfigLoader} from '../Platform/loadPageConfig';

export const CONFIG_LOADER: IConfigLoader = {
   getConfig(data: any = {}) {
      return {
         editDialog: {
            type: 'record',
            key: data.key,
            source: RecordProvider,
            record: data.record
         },
         productsList: {
            type: 'list',
            source: ProductProvider,
            filter: {
               documentKey: data.key
            }
         }
      };
   }
}