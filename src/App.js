import React, { Component } from 'react';
import './App.css';
import './components/Wrapper';
import './components/Table'
import './components/Navbar';
import './components/Container';
import './employee.json';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Employee Directory</h1>
        <table>
            <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Department</th>
            </tr>
            </thead>
            <tbody>
                <tr>
                    <td/>
                    <td/>
                    <td/>
                    <td/>
                </tr>
            </tbody>
        </table>
    </div>
    );
  }
}

export default App;
