import React from 'react';

function TableHead(props) {
  return (
    <thead>
      <tr>
        <th key="firstName">First Name
          <span onClick={props.firstNameAsc}>&#9650;</span>
          <span onClick={props.firstNameDesc}>&#9660;</span>
        </th>
        <th key="lastName">Last Name
          <span onClick={props.lastNameAsc}>&#9650;</span>
          <span onClick={props.lastNameDesc}>&#9660;</span>
        </th>
        <th>Department</th>
      </tr>
    </thead>
  );
}

export default TableHead;