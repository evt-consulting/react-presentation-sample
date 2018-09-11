import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getAllEmployees } from '../../services/employeeService';
// import * as actions from '../../store/actions/index';

import Header from '../../components/Header/Header';
import SearchBar from '../../components/SearchBar/SearchBar';
import EmployeeList from '../../components/EmployeeList/EmployeeList';

import './HomePage.css';

class HomePage extends Component {    
    constructor(props) {
        super(props);

        const allEmployees = getAllEmployees();

        this.state = {            
            employees: allEmployees,
            filteredEmployees: allEmployees,
            selectedEmployeeName: ''
        }    
    }
    
    // componentDidMount() {
    //     this.props.onInitEmployees();        
    // }

    handleSearchTextChange = (event) => {
        const searchTerm = event.target.value;

        let filteredEmployees = 
            this.state.employees.filter(employee => employee.name.indexOf(searchTerm) !== -1);

        this.setState({
            filteredEmployees: filteredEmployees
        });

        // this.props.onSearchEmployees(searchTerm);
    }

    handleEmployeeListItemClick = (event, employeeName) => {
        this.setState({ selectedEmployeeName: employeeName });

        // this.props.onSelectEmployee(employeeName);
    }

    render() {        
        return (
            <div className="container">
                <Header 
                    selectedEmployeeName={this.state.selectedEmployeeName} />
                <SearchBar 
                    handleSearchTextChange={this.handleSearchTextChange} />
                <EmployeeList 
                    employees={this.state.filteredEmployees}
                    handleEmployeeListItemClick={this.handleEmployeeListItemClick} />
            </div>
        );
    }
}

export default HomePage;

// const mapStateToProps = state => {    
//     return {
//         filteredEmployees: state.employeeReducer.filteredEmployees || [],
//         selectedEmployeeName: state.employeeReducer.selectedEmployeeName
//     };
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         onInitEmployees: () => dispatch(actions.initEmployees()),
//         onSearchEmployees: (searchTerm) => dispatch(actions.searchEmployees(searchTerm)),    
//         onSelectEmployee: (employeeName) =>  dispatch(actions.selectEmployee(employeeName)),    
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(HomePage);