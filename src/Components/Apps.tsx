import React, { useState } from 'react';
import { Container } from '@mui/material';
import EmployeeForm from './EmployeeForm';
import EmployeeTable from './EmployeeTable';

const Apps: React.FC = () => {
  const [employees, setEmployees] = useState<any[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const addEmployee = (employee: any) => {
    setEmployees((prevEmployees) => [...prevEmployees, employee]);
    setSubmitted(true);
  };

  const deleteEmployee = (index: number) => {
    setEmployees((prevEmployees) => prevEmployees.filter((_, i) => i !== index));
  };

  const editEmployee = (index: number, updatedEmployee: any) => {
    setEmployees((prevEmployees) =>
      prevEmployees.map((employee, i) => (i === index ? updatedEmployee : employee))
    );
  };

  return (
    <Container maxWidth="md" style={{ marginTop: '2rem' }}>
      { <EmployeeForm addEmployee={addEmployee} />}
      {submitted && <EmployeeTable employees={employees} deleteEmployee={deleteEmployee} editEmployee={editEmployee} />}
    </Container>
  );
};

export default Apps;
