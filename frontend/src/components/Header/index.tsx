import { AppBar, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export const HeaderBar = () => {
  return (
    <AppBar position="sticky" style={{ marginBottom: '1em' }}>
      <Toolbar variant="dense">
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Typography variant="h6" color="inherit" component="div">
            Candies
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
};
