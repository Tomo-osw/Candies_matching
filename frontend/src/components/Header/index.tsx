import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';

export const HeaderBar = () => {
  return (
    <AppBar position="sticky" style={{ marginBottom: '1em' }}>
      <Toolbar variant="dense">
        <Typography variant="h6" color="inherit" component="div">
          Candies
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
