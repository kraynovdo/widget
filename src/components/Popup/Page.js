import React, {useState} from 'react';
import './Page.css';
import Popup from './controls/Popup';
import RecordProvider from './data/RecordProvider';
import loadPageConfig from './loadPageConfig';
import loadData from './loadData';


export default function PopupPage() {
   const list = RecordProvider.query();
   const [popupState, setPopupState] = useState({
      isOpened: false,
      template: null,
      templateOptions: {},
      preloadData: null
   });
   function openPopup({record}) {
      const pageCfg = loadPageConfig('recordForm');
      const templateOptions = {
         ...pageCfg.templateOptions,
         key: record.id,
         record
      };
      setPopupState({
         ...popupState,
         template: pageCfg.template,
         templateOptions,
         preloadData: loadData(pageCfg, templateOptions),
         isOpened: true
      });
   }
   function closePopup() {
      setPopupState({
         ...popupState,
         isOpened: false,
         preloadData: null
      });
   }
   return (
      <div className="demo-popupPage">
         <div className="demo-popupPage__grid">
            {list.map((item) => (
               <div key={item.id} className="demo-popupPage__grid-item" onClick={() => openPopup({record: item})}>
                  <div className="demo-popupPage__grid-item-column">{item.id}</div>
                  <div className="demo-popupPage__grid-item-column">{item.number}</div>
                  <div className="demo-popupPage__grid-item-column">{item.title}</div>
               </div>
            ))}
         </div>
         {popupState.isOpened ?
            <Popup {...popupState} onClose={closePopup}/> :
            <div></div>
         }
      </div>
   );
};
