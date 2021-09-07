import RecordProvider from './data/RecordProvider';
import ProductProvider from './data/ProductProvider';
import EditingDialog from './controls/EditingDialog';
const CONFIG_LOADER = {
   getConfig(data = {}) {
      return {
         editDialog: {
            type: 'editDialog',
            key: data.key,
            source: RecordProvider
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
const CONFIGS = {
   recordForm: {
      template: EditingDialog,
      templateOptions: {
         name: 'editDialog'
      },
      prefetchConfig: {
         configLoader: CONFIG_LOADER
      }
   }
};

export default (key) => {
   return CONFIGS[key];
};