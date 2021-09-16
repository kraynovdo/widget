import RecordProvider from './data/RecordProvider';
import ProductProvider from './data/ProductProvider';

export const CONFIG_LOADER = {
   getConfig(data = {}) {
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