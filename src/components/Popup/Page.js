import React, {useState} from 'react';
import './Page.css';
import Popup from './Platform/controls/Popup';
import RecordProvider from './Custom/data/RecordProvider';
import loadPageConfig from './Platform/loadPageConfig';
import DataLoader from './Platform/DataLoader';


export default function PopupPage() {
   const [list, setList] = useState([]);
   const [listLoaded, setListLoaded] = useState(false);
   const [popupState, setPopupState] = useState({
      isOpened: false,
      template: null,
      templateOptions: {},
      prefetchData: null
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
         prefetchData: DataLoader.load(pageCfg, templateOptions),
         isOpened: true
      });
   }
   function closePopup() {
      setPopupState({
         ...popupState,
         isOpened: false,
         prefetchData: null
      });
   }
   if (!listLoaded) {
      RecordProvider.query().then((result) => {
         setListLoaded(true);
         setList(result);
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
