import React from 'react';
import './Page.css';

function openPopup() {

}

export default function PopupPage() {
   return (
      <div className="demo-popupPage">
         <button onClick={openPopup} className="demo-popupPage__button">Открыть попап</button>
      </div>
   );
};
