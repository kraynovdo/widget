import React, {useState, useEffect} from 'react';
import './Search.css';
import {useSelector} from "react-redux";


function Search(props) {
    const [value, setValue] = useState(props.value);


    /*Разобраться с этим без этого не работает обновление значения из props*/
    useEffect(() => {
        setValue(props.value);
    }, [props.value]);

    const userInfo = useSelector((state)=> state.userInfo.name);


    return (
        <div className="demo-search">
            <span>{userInfo}</span>
            <input type="text" className="demo-search__input" value={value} onChange={e => {setValue(e.target.value); props.valueChanged(e.target.value) }}/>
        </div>
    );
}

export default Search;
