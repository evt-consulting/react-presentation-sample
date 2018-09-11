import * as actionTypes from '../actions/actionTypes';

const initialState = {
    employees: [],
    filteredEmployees: [],
    selectedEmployeeName: ''
}

const searchEmployees = (state, action) => {
    const newState = {
        ...state,
        filteredEmployees: 
            state.employees.filter(employee => employee.name.indexOf(action.searchTerm) !== -1)
    }

    return newState;
}

const setEmployees = (state, action) => {
    const newState = {
        ...state,
        employees: action.employees, 
        filteredEmployees: action.employees,
    };
    
    return newState;
}

const selectEmployee = (state, action) => {
    const newState = {
        ...state,
        selectedEmployeeName: action.selectedEmployeeName
    }

    return newState;
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_EMPLOYEES: return setEmployees(state, action);    
        case actionTypes.SEARCH_FOR_EMPLOYEES: return searchEmployees(state, action);
        case actionTypes.SELECT_EMPLOYEE: return selectEmployee(state, action);
        default: return state;
    }
}

export default reducer;