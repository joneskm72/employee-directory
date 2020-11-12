import React from 'react';

function Table( { employees } ) {
  return (
    <table className='table'>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Department</th>
        </tr>
      </thead>
      <tbody>
      {employees.map(data => (
          <tr key={data}>
            <td>{data.firstName}</td>
            <td>{data.lastName}</td>
            <td>{data.department}</td>
          </tr>       
      ))}
      </tbody>
    </table>
  );
}

export default Table;