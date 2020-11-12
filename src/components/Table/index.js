import React from 'react';
import TableHead from '../TableHead';
import TableBody from '../TableBody';

function Table(props) {
  return (
    <table className='table'>
      <TableHead
        firstNameAsc={props.firstNameAsc}
        firstNameDesc={props.firstNameDesc}
        lastNameAsc={props.lastNameAsc}
        lastNameDesc={props.lastNameDesc}
        deptAsc={props.deptAsc}
        deptDesc={props.deptDesc}
      />
      <TableBody
        employees={props.employees}
      />
    </table>
  );
}

export default Table;