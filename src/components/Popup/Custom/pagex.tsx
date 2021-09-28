import EditingDialog from './controls/EditingDialog';
import {CONFIG_LOADER} from './loaderConfig';
import {IPageX} from '../Platform/loadPageConfig';
import {PAGE_CONFIG_LOADER} from "./pageLoaderConfig";

export const pagex: IPageX = {
   recordForm: {
      template: EditingDialog,
      templateOptions: {
         name: 'editDialog'
      },
      prefetchConfig: {
         configLoader: CONFIG_LOADER
      }
   },
   registryPage: {
      template: null,
      templateOptions: {
         name: 'editDialog'
      },
      prefetchConfig: {
         configLoader: PAGE_CONFIG_LOADER
      }
   }
};
