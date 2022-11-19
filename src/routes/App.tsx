import { Routes, Route } from 'react-router-dom';
import Main from '../layouts/Main';
import Home from '../pages/Home';
import Login from '../pages/Login';
import '../styles/global.css';

const App = () => {
  return (
    <Main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Main>
  );
};

export default App;
