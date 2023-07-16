import React from 'react';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';

export default function Wrapper() {
  return (
    <div className='wrapper'>
      <Header />
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}
