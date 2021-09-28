import React from 'react';
import './Popup.css';
import PageContainer from './PageContainer';
import {EnhancedStore} from "@reduxjs/toolkit";

export interface IPopupProps {
    template: any;
    templateOptions?: Record<string, any>;
    prefetchStore: EnhancedStore;
    onClose?: Function;
}

export default function Popup({template: Template, templateOptions = {}, prefetchStore, onClose}: IPopupProps) {
   return (
       <PageContainer prefetchStore={prefetchStore}>
          <div className="demo-Popup">
              <button className="demo-Popup__closeButton" onClick={() => onClose?.()}>X</button>
              <Template {...templateOptions}/>
          </div>
       </PageContainer>
   );
};
