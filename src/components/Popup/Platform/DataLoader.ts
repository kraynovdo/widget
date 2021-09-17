import {configureStore} from '@reduxjs/toolkit';
import listProvider from './DataLoader/listProvider';
import recordProvider from './DataLoader/recordProvider';
import {ILoaderProvider, ILoaderProviderResult} from './DataLoader/interface';
import {EnhancedStore} from '@reduxjs/toolkit/src/configureStore';

const LOAD_DATA_METHODS: Record<string, ILoaderProvider> = {
   list: listProvider,
   record: recordProvider
};

export interface ILoaderResult {
   store: EnhancedStore;
   prefetchData: Record<string, ILoaderProviderResult['prefetchData']>;
}

function load(pageCfg: Record<string, any>, options: Record<string, any> = {}): ILoaderResult {
   const loaders = pageCfg.prefetchConfig.configLoader.getConfig(options);
   const reducers: Record<string, ILoaderProviderResult['initialData']['reducer']> = {};
   const preloadedState: Record<string, ILoaderProviderResult['initialData']['preloadedState']> = {};
   const prefetchData: Record<string, ILoaderProviderResult['prefetchData']> = {};

   Object.keys(loaders).forEach((key) => {
      const loaderCfg = loaders[key];
      const {initialData, prefetchData: preloadResult} = LOAD_DATA_METHODS[loaderCfg.type].load(loaderCfg);
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