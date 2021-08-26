import React, {useState} from 'react';
import './Filter.css'

function Filter(props) {
    const [value, setValue] = useState(props.value)
    return (
        <div className="demo-filter" onClick={() => {setValue(!value); props.valueChanged(!value)}}>
            <FilterItem text="Все" selected={value}/>
            <FilterItem text="Выполненные" selected={!value}/>
        </div>
    );
}

function FilterItem(props) {
    return <span className={'demo-filter__item' + (props.selected ? ' demo-filter__item_selected' : '')}>{props.text}</span>
}

export default Filter;
