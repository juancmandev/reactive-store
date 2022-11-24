import { Typography } from '@mui/material';
import ProductCard from '../components/ProductCard';
import { ProductCardsContainer } from '../styles/styledComponents';

const Home = () => {
  const array = ['1', '2', '3', '4', '5', '7', '8', '9', '10'];

  return (
    <>
      <ProductCardsContainer>
        {array.map((item) => (
          <ProductCard key={item} />
        ))}
      </ProductCardsContainer>
      <Typography variant='body1' color='initial'>
        Home
      </Typography>
    </>
  );
};

export default Home;
