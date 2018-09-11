import React from 'react';

import EmployeeListItem from './EmployeeListItem/EmployeeListItem';

import './EmployeeList.css';

function employeeList(props) {
    return (<ul className="list-group">
                {props.employees.map(employee => {
                    return (<li key={employee.name} className="list-group-item">
                                <EmployeeListItem 
                                    {...employee} 
                                    handleEmployeeListItemClick={props.handleEmployeeListItemClick} />
                            </li>);
                })}                
            </ul>)
}

export default employeeList;    