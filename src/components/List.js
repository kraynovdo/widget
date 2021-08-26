import React from 'react';
import './List.css';

function List(props) {

    const listItems = props.items.map((item) =>
        <div className={'demo-list_item demo-list_item_' + item.done} key={item.id}>{item.name}</div>
    )

    return (
        <div className="demo-list">{listItems}</div>
    );
}

export default List;
