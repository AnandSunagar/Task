import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, TextField } from '@mui/material';

interface EmployeeTableProps {
    employees: any[];
    deleteEmployee: (index: number) => void;
    editEmployee: (index: number, updatedEmployee: any) => void;
}

interface Employee {
    empId: string;
    name: string;
    designation: string;
    department: string;
    project: string;
}

const initialEmployee: Employee = {
    empId: "",
    name: "",
    designation: "",
    department: "",
    project: "",
};

const EmployeeTable: React.FC<EmployeeTableProps> = ({ employees, deleteEmployee, editEmployee }) => {
    const [editIndex, setEditIndex] = useState(-1);

    const [editedEmployee, setEditedEmployee] = useState(initialEmployee);

    const handleDeleteClick = (index: number) => {
        deleteEmployee(index);
    };

    const handleEditClick = (index: number) => {
        if (index === editIndex) {
            editEmployee(editIndex, editedEmployee);
            setEditIndex(-1);
            setEditedEmployee(initialEmployee);
        } else {
            setEditIndex(index);
            setEditedEmployee(employees[index]);
        }
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setEditedEmployee((prevEmployee: Employee) => ({
            ...prevEmployee,
            [name]: value,
        }));
    };

    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Emp ID</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Designation</TableCell>
                        <TableCell>Department</TableCell>
                        <TableCell>Project</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {employees.map((employee, index) => (
                        <TableRow key={index}>
                            <TableCell>
                                {index === editIndex ? (
                                    <TextField
                                        name="empId"
                                        value={editedEmployee.empId || ''}
                                        onChange={handleInputChange}
                                    />
                                ) : (
                                    employee.empId
                                )}
                            </TableCell>
                            <TableCell>
                                {index === editIndex ? (
                                    <TextField
                                        name="name"
                                        value={editedEmployee.name || ''}
                                        onChange={handleInputChange}
                                    />
                                ) : (
                                    employee.name
                                )}
                            </TableCell>
                            <TableCell>
                                {index === editIndex ? (
                                    <TextField
                                        name="designation"
                                        value={editedEmployee.designation || ''}
                                        onChange={handleInputChange}
                                    />
                                ) : (
                                    employee.designation
                                )}
                            </TableCell>
                            <TableCell>
                                {index === editIndex ? (
                                    <TextField
                                        name="department"
                                        value={editedEmployee.department || ''}
                                        onChange={handleInputChange}
                                    />
                                ) : (
                                    employee.department
                                )}
                            </TableCell>
                            <TableCell>
                                {index === editIndex ? (
                                    <TextField
                                        name="project"
                                        value={editedEmployee.project || ''}
                                        onChange={handleInputChange}
                                    />
                                ) : (
                                    employee.project
                                )}
                            </TableCell>
                            <TableCell>
                                <Button style={{margin:5}} onClick={() => handleEditClick(index)} variant="contained">
                                    Edit
                                </Button>

                                <Button style={{margin:5}} onClick={() => handleDeleteClick(index)} variant="contained">
                                    Delete
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default EmployeeTable;
