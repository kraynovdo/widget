import React from 'react';
import {ContextProvider} from '../../../../ContextProvider';
import {EnhancedStore} from "@reduxjs/toolkit/src/configureStore";

interface IPrefetchContainerProps {
   prefetchStore: EnhancedStore;
   children: any;
}

function PageContainer({prefetchStore, children}: IPrefetchContainerProps) {
   return (
      <ContextProvider store={prefetchStore}>
         {children}
      </ContextProvider>
   );
}

export default PageContainer;
