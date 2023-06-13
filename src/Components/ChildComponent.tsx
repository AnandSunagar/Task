import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';


function createData(
  EmpId: string,
  EmpName: string,
  Designation: string,
  Department: string,
  Project: string,
) {
  return { EmpId, EmpName, Designation, Department, Project };
}

const rows = [
  createData('', '', '', '', '')
  
];

export default function ChildComponent() {

  function handleClick(){

  }

     return (
        <div style={{display:'flex',justifyContent:'center',
                     alignItems:'center'}}>
        <Box
boxShadow={3}
borderRadius={8}
padding={2}
width={1000}
height={150}
>
<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    
    
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 100 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>EmpId</TableCell>
            <TableCell >EmpName</TableCell>
            <TableCell >Designation</TableCell>
            <TableCell >Department</TableCell>
            <TableCell >Project</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.EmpId}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.EmpId}
              </TableCell>
              <TableCell align="right">{row.EmpName}</TableCell>
              <TableCell align="right">{row.Designation}</TableCell>
              <TableCell align="right">{row.Department}</TableCell>
              <TableCell align="right">{row.Project}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Button style={{margin:'10px'}} variant="contained" onClick={handleClick}>Edit</Button>
    <Button style={{margin:'10px'}} variant="contained">Delete</Button>
    </div>
    </Box>
    </div>
  );
}


