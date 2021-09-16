import React from 'react';
import './Popup.css';
import PrefetchContainer from './PrefetchContainer';

export default function Popup({template: Template, templateOptions, prefetchData, onClose}) {
   return (
      <div className="demo-Popup">
         <button className="demo-Popup__closeButton" onClick={() => onClose?.()}>X</button>
         <PrefetchContainer prefetchData={prefetchData}>
            <Template {...templateOptions}/>
         </PrefetchContainer>
      </div>
   );
};
