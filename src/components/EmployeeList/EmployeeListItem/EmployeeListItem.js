import React from 'react';

function employeeListItem(props) {
    return (<div onClick={(e) => props.handleEmployeeListItemClick(e, props.name)}>
                <h3>
                    {props.name}
                </h3>
                <span>
                    {props.description}
                </span>
            </div>);
}

export default employeeListItem;