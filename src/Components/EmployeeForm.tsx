import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';

interface EmployeeFormProps {
  addEmployee: (employee: any) => void;
}

const EmployeeForm: React.FC<EmployeeFormProps> = ({ addEmployee }) => {
  const [employee, setEmployee] = useState({
    empId: '',
    name: '',
    designation: '',
    department: '',
    project: '',
  });

  const [isAddingEmployee, setIsAddingEmployee] = useState(false);

  const handleAddEmployee = () => {
    setIsAddingEmployee(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEmployee((prevEmployee) => ({ ...prevEmployee, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addEmployee(employee);
    setEmployee({
      empId: '',
      name: '',
      designation: '',
      department: '',
      project: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2} alignItems="center">
        {!isAddingEmployee && (
          <Grid item>
            <Button variant="contained" onClick={handleAddEmployee}>
              Add Employee Details
            </Button>
          </Grid>
        )}

        {isAddingEmployee && (
          <>
            <Grid item>
              <TextField
                name="empId"
                label="Emp ID"
                value={employee.empId}
                onChange={handleInputChange}
                variant="outlined"
              />
            </Grid>
            <Grid item>
              <TextField
                name="name"
                label="Name"
                value={employee.name}
                onChange={handleInputChange}
                variant="outlined"
              />
            </Grid>
            <Grid item>
              <TextField
                name="designation"
                label="Designation"
                value={employee.designation}
                onChange={handleInputChange}
                variant="outlined"
              />
            </Grid>
            <Grid item>
              <TextField
                name="department"
                label="Department"
                value={employee.department}
                onChange={handleInputChange}
                variant="outlined"
              />
            </Grid>
            <Grid item>
              <TextField
                name="project"
                label="Project"
                value={employee.project}
                onChange={handleInputChange}
                variant="outlined"
              />
            </Grid>
            <Grid item>
              <Button type="submit" variant="contained">
                Submit
              </Button>
            </Grid>
          </>
        )}
      </Grid>
    </form>
  );
};

export default EmployeeForm;
