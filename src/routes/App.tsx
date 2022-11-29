import { Routes, Route } from 'react-router-dom';
import Main from '../layouts/Main';
import Home from '../pages/Home';
import Account from '../pages/Account';
import ShoppingCart from '../pages/ShoppingCart';
import '../styles/global.css';

const App = () => {
  return (
    <Main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/account' element={<Account />} />
        <Route path='/shopping-cart' element={<ShoppingCart />} />
      </Routes>
    </Main>
  );
};

export default App;
