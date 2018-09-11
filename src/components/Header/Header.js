import React from 'react';

import './Header.css';

function header(props) {
    return (<div className="home-title">
                <h2>Employee Directory</h2>
                {props.selectedEmployeeName !== '' ? <span><strong>Employee: </strong>{props.selectedEmployeeName}</span> : ''}
            </div>);
}

export default header;