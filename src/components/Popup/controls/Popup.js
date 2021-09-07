import React from 'react';
import './Popup.css';
import {ContextProvider} from '../../../ContextProvider';
import PrefetchAwaiter from './PrefetchAwaiter';

export default function Popup({template: Template, templateOptions, preloadData, onClose}) {
   return (
      <div className="demo-Popup">
         <button className="demo-Popup__closeButton" onClick={() => onClose?.()}>X</button>
         <ContextProvider store={preloadData}>
            <PrefetchAwaiter>
               <Template {...templateOptions}/>
            </PrefetchAwaiter>
         </ContextProvider>
      </div>
   );
};
