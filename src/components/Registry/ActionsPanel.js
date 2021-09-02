import React from 'react';
import Delete from "./Delete";
import ViewMode from "./ViewMode";
import './ActionsPanel.css'

function Filter() {

    return (
        <div className="demo-panel">
            <Delete/>
            <ViewMode/>
        </div>
    );
}

export default Filter;
