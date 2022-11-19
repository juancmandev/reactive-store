import { Typography, AppBar, Toolbar, IconButton, Stack } from '@mui/material';
import { NavLink } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { UserHeaderContainer } from '../styles/';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = () => {
  return (
    <AppBar>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <NavLink to='/'>
          <Typography variant='h5'>Reactive Shop</Typography>
        </NavLink>
        <UserHeaderContainer>
          <NavLink to='/login'>
            <IconButton>
              <AccountCircleIcon fontSize='large' sx={{ color: '#fff' }} />
            </IconButton>
          </NavLink>
          <IconButton>
            <ShoppingCartIcon fontSize='large' sx={{ color: '#fff' }} />
          </IconButton>
        </UserHeaderContainer>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
