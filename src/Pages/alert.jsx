import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function BasicAlerts() {
  return (
    <Stack sx={{marginTop:"100px", width: '100%' }} spacing={2}>
      
      <Alert variant="filled" severity="warning">
        You are not loggedIn — Please log in first!
      </Alert>
      
      
    </Stack>
  );
}