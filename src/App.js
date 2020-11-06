import React, { Component } from 'react';
import './App.css';
import './components/Wrapper';
import Table from './components/Table'
import './components/Navbar';
import Container from './components/Container';
import data from './employee.json';

class App extends Component {
    state = {
      show: false,
      id: 0,
      data,
      departments: ["All"],
      select: "All"
    }
  
  render() {
    return (
      <Container>
        <h1>Employee Directory</h1>   
          <Table
            data={this.state.data}
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            department={this.state.department}  
          /> 
      </Container>
    );
  }
}

export default App;
