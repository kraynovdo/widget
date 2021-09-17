import React, {useState} from 'react';
import './Page.css';
import Popup from '../Platform/controls/Popup';
import RecordProvider from './data/RecordProvider';
import * as Opener from '../Platform/controls/Opener';

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
   const [list, setList] = useState([]);
   const [listLoaded, setListLoaded] = useState(false);
   const [popupState, setPopupState] = useState({});
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
               <div key={item.id} className="demo-popupPage__grid-item" onClick={() => Opener.open(getPopupOptions(item), setPopupState)}>
                  <div className="demo-popupPage__grid-item-column">{item.id}</div>
                  <div className="demo-popupPage__grid-item-column">{item.number}</div>
                  <div className="demo-popupPage__grid-item-column">{item.title}</div>
               </div>
            ))}
         </div>
         {popupState.isOpened ?
            <Popup {...popupState} onClose={Opener.close}/> :
            <div></div>
         }
      </div>
   );
};
