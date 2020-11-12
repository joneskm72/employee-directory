import React from 'react';

function TableBody(employees) {
  return (
    <tbody>
      {employees.map(data => (
        <tr key={data}>
          <td>{data.firstName}</td>
          <td>{data.lastName}</td>
          <td>{data.department}</td>
        </tr>       
      ))}
    </tbody>
  );
}

export default TableBody;