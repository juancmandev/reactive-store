import {
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Tooltip,
  Button,
} from '@mui/material';
import { NavLink } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { UserHeaderContainer } from '../styles/styledComponents';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = () => {
  return (
    <AppBar>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Tooltip title='Home'>
          <NavLink to='/'>
            <Button variant='text' sx={{ textTransform: 'none' }}>
              <Typography color='#fff' variant='h5'>
                Reactive Shop
              </Typography>
            </Button>
          </NavLink>
        </Tooltip>
        <UserHeaderContainer>
          <Tooltip title='Account'>
            <NavLink to='/account'>
              <IconButton>
                <AccountCircleIcon fontSize='large' sx={{ color: '#fff' }} />
              </IconButton>
            </NavLink>
          </Tooltip>
          <Tooltip title='Shopping Cart'>
            <NavLink to='/shopping-cart'>
              <IconButton>
                <ShoppingCartIcon fontSize='large' sx={{ color: '#fff' }} />
              </IconButton>
            </NavLink>
          </Tooltip>
        </UserHeaderContainer>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
