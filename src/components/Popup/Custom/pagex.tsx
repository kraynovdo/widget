import EditingDialog from './controls/EditingDialog';
import {CONFIG_LOADER} from './loaderConfig';
import {IPageX} from '../Platform/loadPageConfig';

export const pagex: IPageX = {
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