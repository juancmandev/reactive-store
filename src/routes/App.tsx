import { Routes, Route } from 'react-router-dom';
import Main from '../layouts/Main';
import Home from '../pages/Home';
import Account from '../pages/Account';
import '../styles/global.css';

const App = () => {
  return (
    <Main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/account' element={<Account />} />
      </Routes>
    </Main>
  );
};

export default App;
