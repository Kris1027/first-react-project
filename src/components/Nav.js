import { useEffect } from 'react';

function Nav({ isActive, displaySecondLogo, handleResize }) {
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  const menuToggle = isActive ? 'menu active' : 'menu';

  const navCategories = ['how we work', 'blog', 'account', 'view plans'];
  return (
    <nav className={menuToggle}>
      {navCategories.map((category, index) => (
        <button key={index} className='menu__btn'>
          {category}
        </button>
      ))}
      {displaySecondLogo ? (
        <img
          className='menu__image'
          src='./images/bg-pattern-desktop-nav.svg'
          alt='menu background'
        />
      ) : (
        <img
          className='menu__image'
          src='./images/bg-pattern-mobile-nav.svg'
          alt='menu background'
        />
      )}
    </nav>
  );
}

export default Nav;
