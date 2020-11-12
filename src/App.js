import React, { Component } from 'react';
import './App.css';
import Table from './components/Table';
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

    firstNameAsc  = () => {
      let first = this.state.mockEmployeeData;
  
      first.sort(function (a, b) {
        return a.firstName.localeCompare(b.firstName);
      })
      this.setState({ mockEmployeeData: first });
    };
  
    firstNameDesc  = () => {
      let first = this.state.mockEmployeeData;
  
      first.sort(function (a, b) {
        return b.firstName.localeCompare(a.firstName);
      })
      this.setState({ mockEmployeeData: first });
    };

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
            firstNameAsc={this.firstNameAsc}
            firstNameDesc={this.firstNameDesc}
            lastNameAsc={this.lastNameAsc}
            lastNameDesc={this.lastNameDesc} 
          />
      </Container>
    );
  }
}

export default App;
