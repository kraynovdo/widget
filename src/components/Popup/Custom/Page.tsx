import React, {useState} from 'react';
import './Page.css';
import Popup from '../Platform/controls/Popup';
import * as Opener from '../Platform/controls/Opener';
import PageContainer from "../Platform/controls/PageContainer";
import DataLoader from "../Platform/DataLoader";
import loadConfig from "../Platform/loadPageConfig";
import ListWidget from "../Platform/controls/ListWidget";

function getPopupOptions(item: Record<string, any>) {
   return {
      pageId: 'recordForm',
      templateOptions: {
         key: item.id,
         record: item,
         name: 'editDialog'
      }
   }
}

export default function PopupPage() {
   const [popupState, setPopupState] = useState<any>({});
   const [prefetchStore, setPrefetchStore] = useState<any>();

   if (!prefetchStore) {
      // Эта часть будет в платформе в общем компоненте страницы
      setPrefetchStore(DataLoader.load(loadConfig('registryPage')));
   }
   return (
       <PageContainer prefetchStore={prefetchStore}>
          <div className="demo-popupPage">
             <ListWidget name="recordsList" onClick={(item: any) => Opener.open(getPopupOptions(item), setPopupState)}/>
             {popupState.isOpened ?
                 <Popup {...popupState} onClose={() => Opener.close(popupState, setPopupState)}/> :
                 <div></div>
             }
          </div>
       </PageContainer>
   );
};
