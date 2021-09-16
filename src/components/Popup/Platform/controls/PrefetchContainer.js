import React, {useState} from 'react';
import {ContextProvider} from '../../../../ContextProvider';

function awaitPrefetch(prefetchData) {
   const actions = [];
   const promises = [];
   Object.keys(prefetchData).forEach((key) => {
      const {promise, updateAction} = prefetchData[key] || {};
      if (promise && updateAction) {
         promises.push(promise);
         actions.push(updateAction);
      }
   });
   return Promise.allSettled(promises).then((results) => {
      return results.map((result, index) => {
         return {
            prefetchResult: result.value,
            updateAction: actions[index]
         }
      });
   });
}

function PrefetchContainer({prefetchData, children}) {
   const [store, setStore] = useState();
   if (!store || prefetchData.store !== store) {
      setStore(prefetchData.store);
      const prefetch = prefetchData.prefetchData;
      awaitPrefetch(prefetch).then((results) => {
         results.forEach(({prefetchResult, updateAction}) => {
            prefetchData.store.dispatch(updateAction(prefetchResult));
         });
      });
   }
   return (
      <ContextProvider store={store}>
         {children}
      </ContextProvider>
   );
}

export default PrefetchContainer;
