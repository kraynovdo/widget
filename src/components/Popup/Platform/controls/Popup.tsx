import React from 'react';
import './Popup.css';
import PrefetchContainer from './PrefetchContainer';
import {ILoaderResult} from '../DataLoader';

export interface IPopupProps {
    template: any;
    templateOptions?: Record<string, any>;
    prefetchData: ILoaderResult;
    onClose?: Function;
}

export default function Popup({template: Template, templateOptions = {}, prefetchData, onClose}: IPopupProps) {
   return (
      <div className="demo-Popup">
         <button className="demo-Popup__closeButton" onClick={() => onClose?.()}>X</button>
         <PrefetchContainer prefetchData={prefetchData}>
            <Template {...templateOptions}/>
         </PrefetchContainer>
      </div>
   );
};
