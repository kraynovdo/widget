import React from 'react';
import {useContextProviderStore} from '../../../ContextProvider';

function PrefetchWrapper({children}) {
   const store = useContextProviderStore();
   const state = store.getState();
   const promises = [];
   const actions = [];
   Object.keys(state).forEach((key) => {
      const data = state[key];
      if (data.prefetchData) {
         const {promise, action} = data.prefetchData;
         promises.push(promise);
         actions.push(action);
      }
   });
   Promise.all(promises).then((results) => {
      results.forEach((res, index) => {
         store.dispatch(actions[index](res));
      });
   });
   return (
      <>
         {children}
      </>
   );
}

export default PrefetchWrapper;
