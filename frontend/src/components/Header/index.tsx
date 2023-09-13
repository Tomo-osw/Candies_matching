import { AppBar, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Candies } from '../Icon/Candies';

export const HeaderBar = () => {
  return (
    <AppBar position="sticky" style={{ marginBottom: '2em' }}>
      <Toolbar variant="dense">
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Candies
            fill="#ffffff"
            style={{ width: 'auto', height: '40px', padding: '2px 0' }}
          />
        </Link>
      </Toolbar>
    </AppBar>
  );
};
