import React, {useState} from 'react';
import './Search.css';


function Search(props) {
    const [value, setValue] = useState(props.value);

    return (
        <div className="demo-search">
            <input type="text" className="demo-search__input" value={value} onChange={e => {setValue(e.target.value); props.valueChanged(e.target.value) }}/>
        </div>
    );
}

export default Search;
