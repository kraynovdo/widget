import EditingDialog from './controls/EditingDialog';
import {CONFIG_LOADER} from './loaderConfig';

export const pagex = {
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