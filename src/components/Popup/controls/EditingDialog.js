import React from 'react';
import {actions as RecordActions} from '../stores/Record';
import {useContextProviderDispatch, useContextProviderSelector} from '../../../ContextProvider';
import './EditingDialog.css';
import ListWidget from '../../Registry/widgets/ListWidget';

export default function EditingDialog({headerTemplate: Header, contentTemplate: Content, name}) {
   const record = useContextProviderSelector((state) => {
      return state[name].record;
   });
   const dispatch = useContextProviderDispatch();
   return (
      <div className="demo-Popup__editingDialog">
         <div className="demo-Popup__editingDialog-header">
            <div className="demo-Popup__editingDialog-input">
               <label htmlFor="docNumber">Doc number:</label>
               <input
                  id="docNumber"
                  type="number"
                  value={record.number}
                  onChange={(e) => {
                     dispatch(RecordActions.changeField('number', e.target.value));
                  }}
               />
            </div>
            <button
               onClick={() => {
                  dispatch(RecordActions.update(record));
               }}
               className="demo-Popup__editingDialog-button">Сохранить</button>
         </div>
         <div className="demo-Popup__editingDialog-body">
            <div className="demo-Popup__editingDialog-input">
               <label htmlFor="title">Description:</label>
               <input
                  id="title"
                  type="text"
                  value={record.title}
                  onChange={(e) => {
                     dispatch(RecordActions.changeField('title', e.target.value));
                  }}
               />
            </div>
            <div className="demo-Popup__editingDialog-products">
               <div className="demo-Popup__editingDialog-products-label">Products</div>
               <ListWidget name="productsList"/>
            </div>
         </div>
      </div>
   );
};
