import React, {useState} from 'react';
import {ContextProvider} from '../../../../ContextProvider';
import {ILoaderResult} from '../DataLoader';
import {ILoaderProviderResult} from '../DataLoader/interface';

type TAwaitPrefetchResult = Array<{
   prefetchResult: any,
   updateAction: ILoaderProviderResult['prefetchData']['updateAction']
}>;

function awaitPrefetch(
    prefetchData: ILoaderResult['prefetchData']
): Promise<TAwaitPrefetchResult> {
   const actions: Array<ILoaderProviderResult['prefetchData']['updateAction']> = [];
   const promises: Array<ILoaderProviderResult['prefetchData']['promise']> = [];
   Object.keys(prefetchData).forEach((key) => {
      const {promise, updateAction} = prefetchData[key] || {};
      if (promise && updateAction) {
         promises.push(promise);
         actions.push(updateAction);
      }
   });
   return Promise.allSettled<any[]>(promises).then((results) => {
      return results.map((result, index) => {
         return {
            prefetchResult: result.value,
            updateAction: actions[index]
         }
      });
   });
}

interface IPrefetchContainerProps {
   prefetchData: ILoaderResult;
   children: any;
}

function PrefetchContainer({prefetchData, children}: IPrefetchContainerProps) {
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
