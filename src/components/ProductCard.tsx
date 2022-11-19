import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Stack,
  Button,
  IconButton,
} from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';

const ProductCard = () => {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component='img'
          height='160'
          image='https://media.revistagq.com/photos/61641b095c35f3d47d7c5454/1:1/w_1600%2Cc_limit/Metroid-Dread.jpeg'
          alt='Metroid Dread'
        />
        <CardContent>
          <Typography variant='h5'>Metroid Dread</Typography>
          <Typography variant='subtitle1'>$999</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Stack
          sx={{ width: '100%' }}
          justifyContent='space-between'
          direction='row'>
          <Button sx={{ display: 'flex', gap: 1 }} variant='contained'>
            <AddShoppingCartIcon /> Add to Cart
          </Button>
          <IconButton>
            <FavoriteIcon fontSize='medium' />
          </IconButton>
        </Stack>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
