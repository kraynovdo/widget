import React from 'react';
import {useContextProviderSelector} from "../../../../ContextProvider";
import * as Opener from "./Opener";


function ListWidget({onClick, name}: any) {
    const items = useContextProviderSelector((state) => {
        return state[name].items;
    });

    return (
        <div className="demo-popupPage__grid">
            {items.map((item: any) => (
                <div key={item.id} className="demo-popupPage__grid-item" onClick={() => onClick(item)}>
                    <div className="demo-popupPage__grid-item-column">{item.id}</div>
                    <div className="demo-popupPage__grid-item-column">{item.number}</div>
                    <div className="demo-popupPage__grid-item-column">{item.title}</div>
                </div>
            ))}
        </div>
    );
}

export default ListWidget;
