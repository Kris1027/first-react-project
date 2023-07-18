import { React, useState } from 'react';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';

export default function Wrapper() {
  const [displaySecondLogo, setdisplaySecondLogo] = useState(false);

  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setdisplaySecondLogo(true);
    } else {
      setdisplaySecondLogo(false);
    }
  };

  return (
    <div className='wrapper'>
      <Header />
      <Nav />
      <Main
        displaySecondLogo={displaySecondLogo}
        setdisplaySecondLogo={setdisplaySecondLogo}
        handleResize={handleResize}
      />
      <Footer />
    </div>
  );
}
