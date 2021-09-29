import React from 'react';
import './List.css';

function List(props) {

    const listItems = props.items.map((item) =>
        <div className={'demo-list_item'} key={item.id}>{item.name}</div>
    )

    return (
        <div>
            <h1>viewMode: {props.viewMode}</h1>
            <div className="demo-list">{listItems.length ? listItems : '--Не найдено--'}</div>
        </div>
    );
}

export default List;
