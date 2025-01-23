import React from 'react';
import { Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure this is imported

const DropDown = ({ value, onChange }) => {
  return (
    <Dropdown onSelect={(selectedValue) => onChange({ target: { name: 'status', value: selectedValue } })}>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {value || 'Select Status'}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item eventKey="pending">Pending</Dropdown.Item>
        <Dropdown.Item eventKey="inprogress">In-Progress</Dropdown.Item>
        <Dropdown.Item eventKey="completed">Completed</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropDown;
