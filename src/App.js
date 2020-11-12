import React, { Component } from 'react';
import './App.css';
import './components/Wrapper';
import Table from './components/Table'
import './components/Navbar';
import Container from './components/Container';
import mockEmployeeData from './employee.json';

class App extends Component {
    state = {
      show: false,
      id: 0,
      mockEmployeeData,
      departments: ["All"],
      select: "All"
    }

  lastNameAsc  = () => {
    let last = this.state.mockEmployeeData;

    last.sort(function (a, b) {
      return a.lastName.localeCompare(b.lastName);
    })
    this.setState({ mockEmployeeData: last });
  };

  lastNameDesc  = () => {
    let last = this.state.mockEmployeeData;

    last.sort(function (a, b) {
      return b.lastName.localeCompare(a.lastName);
    })
    this.setState({ mockEmployeeData: last });
  };

  render() {
    return (
      <Container>
        <h1>Employee Directory</h1>   
          <Table
            employees={mockEmployeeData}
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            department={this.state.department}  
          />
         
      </Container>
    );
  }
}

export default App;
