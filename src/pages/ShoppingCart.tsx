import { Stack, Typography } from '@mui/material';
import { ShoppingCartList } from '../styles/styledComponents';
import ShoppingCartItem from '../components/ShoppingCartItem';

const ShoppingCart = () => {
  const array = ['1', '2', '3', '4', '5', '7', '8', '9', '10'];

  return (
    <Stack>
      <Typography>Your Shoping Cart!</Typography>
      <ShoppingCartList>
        {array.map((item) => (
          <ShoppingCartItem key={item} />
        ))}
      </ShoppingCartList>
    </Stack>
  );
};

export default ShoppingCart;
