import * as actionTypes from './actionTypes';

import { getAllEmployees } from '../../services/employeeService';

export const selectEmployee = (selectedEmployeeName) => {
    return {
        type: actionTypes.SELECT_EMPLOYEE,
        selectedEmployeeName: selectedEmployeeName
    }
}

export const searchEmployees = (searchTerm) => {
    return {
        type: actionTypes.SEARCH_FOR_EMPLOYEES,
        searchTerm: searchTerm
    };
}

export const setEmployees = (employees) => {    
    return {
        type: actionTypes.SET_EMPLOYEES,
        employees: employees
    };
}

export const initEmployees = () => {    
    const allEmployees = getAllEmployees();

    return dispatch => dispatch(setEmployees(allEmployees));;
};