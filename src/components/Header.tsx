import {
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Tooltip,
  Button,
} from '@mui/material';
import { NavLink } from 'react-router-dom';
import { UserHeaderContainer } from '../styles/styledComponents';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = () => {
  const navigationItems = [
    {
      path: '/account',
      icon: <AccountCircleIcon fontSize='large' color='inherit' />,
      title: 'Account',
    },
    {
      path: '/favorites',
      icon: <FavoriteOutlinedIcon fontSize='large' color='inherit' />,
      title: 'Favorites',
    },
    {
      path: '/shopping-cart',
      icon: <ShoppingCartIcon fontSize='large' color='inherit' />,
      title: 'Shopping Cart',
    },
  ];

  return (
    <AppBar>
      <Toolbar sx={{ justifyContent: 'space-between', padding: '0 28px' }}>
        <Tooltip title='Home'>
          <NavLink to='/'>
            <Button variant='text' sx={{ textTransform: 'none', padding: 0 }}>
              <Typography color='#fff' variant='h5'>
                Reactive Shop
              </Typography>
            </Button>
          </NavLink>
        </Tooltip>
        <UserHeaderContainer>
          {navigationItems.map((item) => (
            <Tooltip key={item.title} title={item.title}>
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? '#33bfff' : '#fff',
                })}
                to={item.path}>
                <IconButton
                  sx={{ color: 'inherit', backgroundColor: 'inherit' }}>
                  {item.icon}
                </IconButton>
              </NavLink>
            </Tooltip>
          ))}
        </UserHeaderContainer>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
