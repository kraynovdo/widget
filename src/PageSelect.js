import React, {useState} from 'react';
import {useLocation, useHistory} from 'react-router-dom';
import './PageSelect.css';
import {PAGES} from './Pages';

export default function PopupPage() {
   const location = useLocation();
   const history = useHistory();

   function pageChanged(event) {
      history.push(event.target.value);
   }

   return (
      <div className="demo-pageSelect">
         <div>Выбери страницу:</div>
         <select
            className="demo-pageSelect__select"
            name="pages"
            onChange={pageChanged}
            value={location.pathname}>
            {PAGES.map((pageCfg) => (
               <option key={pageCfg.href} value={pageCfg.href}>{pageCfg.title}</option>
            ))}
         </select>
      </div>
   );
};
