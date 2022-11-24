import { FC } from 'react';
import ChildrenProps from '../interfaces/ChildrenProps';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Main: FC<ChildrenProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className='main'>{children}</main>
      <Footer />
    </>
  );
};

export default Main;
