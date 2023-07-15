import React, { useState } from 'react';
import Nav from './Nav';

function Header() {
  const [isActive, setIsActive] = useState(false);

  const toggleClass = () => {
    setIsActive(!isActive);
  };

  return (
    <header className='header'>
      <div className='logo'>
        <div className='logo__image'>
          <img src='./images/logo.svg' alt='logo' />
        </div>
      </div>
      <div className='hamburger'>
        <img
          className={isActive ? 'hamburger__image active' : 'hamburger__image'}
          onClick={toggleClass}
          src={
            isActive ? './images/icon-close.svg' : './images/icon-hamburger.svg'
          }
          alt='hamburger'
        />
      </div>
      <Nav isActive={isActive} toggleClass={toggleClass} />
    </header>
  );
}

export default Header;
