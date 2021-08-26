import React, {useState} from 'react';
import './ViewMode.css';

function ViewMode() {
    const [value, setValue] = useState(true);

    const text = value ? 'Список' : 'Плитка';


    return (
        <div className="demo-vm" onClick={() => setValue(!value)}>{text}</div>
    );
}

export default ViewMode;
