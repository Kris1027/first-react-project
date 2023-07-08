import React, { useState } from 'react';
import Nav from './nav';

function Header() {

    const [isActive, setIsActive] = useState(false);

    const toggleClass = () => {
        setIsActive(!isActive);
    }

    return (
        <header className='header'>
            <div className='logo'>
                <div className='logo__image'></div>
            </div>
            <div className='hamburger'>
                <div className={isActive? 'hamburger__image active' : 'hamburger__image'} onClick={toggleClass}></div>
            </div>
            <Nav isActive={isActive} toggleClass={toggleClass}/>
        </header>
    )
}

export default Header;