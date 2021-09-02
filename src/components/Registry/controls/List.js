import React from 'react';
import './List.css';

function List(props) {

    const listItems = props.items.map((item) =>
        <div className={'demo-list_item'} key={item.id}>{item.name}</div>
    )

    return (
        <div className="demo-list">{listItems.length ? listItems : '--Не найдено--'}</div>
    );
}

export default List;
