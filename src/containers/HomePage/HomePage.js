import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';

import Header from '../../components/Header/Header';
import SearchBar from '../../components/SearchBar/SearchBar';
import EmployeeList from '../../components/EmployeeList/EmployeeList';

import './HomePage.css';

class HomePage extends Component {    
    componentDidMount() {
        this.props.onInitEmployees();        
    }

    handleSearchTextChange = (event) => {
        const searchTerm = event.target.value;

        this.props.onSearchEmployees(searchTerm);
    }

    handleEmployeeListItemClick = (event, employeeName) => {
        this.props.onSelectEmployee(employeeName);
    }

    render() {        
        return (
            <div className="container">
                <Header 
                    selectedEmployeeName={this.props.selectedEmployeeName} />
                <SearchBar 
                    handleSearchTextChange={this.handleSearchTextChange} />
                <EmployeeList 
                    employees={this.props.filteredEmployees}
                    handleEmployeeListItemClick={this.handleEmployeeListItemClick} />
            </div>
        );
    }
}

const mapStateToProps = state => {    
    return {
        filteredEmployees: state.employeeReducer.filteredEmployees || [],
        selectedEmployeeName: state.employeeReducer.selectedEmployeeName
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onInitEmployees: () => dispatch(actions.initEmployees()),
        onSearchEmployees: (searchTerm) => dispatch(actions.searchEmployees(searchTerm)),    
        onSelectEmployee: (employeeName) =>  dispatch(actions.selectEmployee(employeeName)),    
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);