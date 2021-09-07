import {configureStore} from '@reduxjs/toolkit';
import RecordSlice, {actions as RecordActions} from './stores/Record';
import ProductsSlice, {actions as ProductsActions} from './stores/Products';

const LOAD_DATA_METHODS = {
   list: loadList,
   editDialog: loadEditDialog
}

function loadEditDialog({source, key}) {
   const record = source.read(key);
   return {
      reducer: RecordSlice.reducer,
      preloadedState: {
         record,
         source
      }
   }
}

function loadList({source, filter = {}}) {
   const list = source.query(filter);
   return {
      reducer: ProductsSlice.reducer,
      preloadedState: {
         items: list,
         source,
         filter
      }
   }
}

export default function loadData(pageCfg, options = {}) {
   const loaders = pageCfg.prefetchConfig.configLoader.getConfig(options);
   const reducers = {};
   const preloadedState = {};

   Object.keys(loaders).forEach((key) => {
      const loaderCfg = loaders[key];
      const preloadResult = LOAD_DATA_METHODS[loaderCfg.type](loaderCfg);
      reducers[key] = preloadResult.reducer;
      preloadedState[key] = preloadResult.preloadedState;
   });

   return configureStore({
      reducer: reducers,
      preloadedState: preloadedState
   });
}