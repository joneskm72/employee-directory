import React from 'react';

function Table(props) {
  return (
    <table className='table'>
      <thead>
        <tr>
          <th scope='col' key='firstName'>First Name</th>
          <th scope='col' key='lastName'>Last Name</th>
          <th scope='col' key='department'>Department</th>
        </tr>
      </thead>
      <tbody>
      {this.state.employees.map((data, key) => {
        return (
          <tr key={key}>
            <td>{data.firstName}</td>
            <td>{data.lastName}</td>
            <td>{data.department}</td>
          </tr>
        )
      })}
      </tbody>
    </table>
  );
}

export default Table;