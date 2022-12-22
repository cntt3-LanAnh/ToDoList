import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import * as React from 'react';

export function HomeComponent() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained" disableElevation>
        Contained
      </Button>
      <Button variant="contained" className="bg-primary-main">
        Contained
      </Button>
      <h1>OK1</h1>
      <Button variant="outlined">Outlined</Button>
    </Stack>
  );
}
