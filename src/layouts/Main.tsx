import { FC } from 'react';
import Header from '../components/Header';
import ChildrenProps from '../interfaces/ChildrenProps';

const Main: FC<ChildrenProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className='main'>{children}</main>
      <footer>Footer</footer>
    </>
  );
};

export default Main;
