import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const [isEditing, setIsEditing] = useState(false);
    
    const handleAddClick = () => {
        setIsEditing(true);
      };
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>

<Box
      boxShadow={3} 
      borderRadius={8} 
      padding={2} 
      width={1000}
      height={150}
    >
    <div style={{display:'flex',alignItems:'center'}}> 
     <TextField id="outlined-basic" name='Required' disabled={!isEditing} label="EmpId" variant="outlined" style={{margin:'10px'}}/>
     <TextField id="outlined-basic" name='Required' disabled={!isEditing} label="EmpName" variant="outlined" style={{margin:'10px'}}/>
     <TextField id="outlined-basic" name='Required' disabled={!isEditing} label="Designation" variant="outlined" style={{margin:'10px'}}/>
     <TextField id="outlined-basic" name='Required' disabled={!isEditing} label="Department" variant="outlined" style={{margin:'10px'}} />
     <TextField id="outlined-basic" name='Required' disabled={!isEditing} label="Project" variant="outlined" style={{margin:'10px'}}/>
     <Button variant="contained" onClick={handleAddClick}>Add</Button>
     </div>
     <Button style={{margin:'20px'}} variant="contained">Submit</Button>
    </Box>
    <br/>
    <br/>
    <div>
      <ChildComponent/>
    </div>
    </div>
  )
}

export default ParentComponent;
