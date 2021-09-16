import {configureStore} from '@reduxjs/toolkit';
import listProvider from './DataLoader/listProvider';
import recordProvider from './DataLoader/recordProvider';

const LOAD_DATA_METHODS = {
   list: listProvider,
   record: recordProvider
};
function load(pageCfg, options = {}) {
   const loaders = pageCfg.prefetchConfig.configLoader.getConfig(options);
   const reducers = {};
   const preloadedState = {};
   const prefetchData = {};

   Object.keys(loaders).forEach((key) => {
      const loaderCfg = loaders[key];
      const {initialData, prefetchData: preloadResult} = LOAD_DATA_METHODS[loaderCfg.type](loaderCfg);
      reducers[key] = initialData.reducer;
      preloadedState[key] = initialData.preloadedState;
      prefetchData[key] = preloadResult;
   });

   return {
      store: configureStore({
         reducer: reducers,
         preloadedState: preloadedState
      }),
      prefetchData
   };
}

const DataLoader = {
   load
};

export default DataLoader;