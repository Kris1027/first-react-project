import React from 'react';

function Nav({ isActive }) {

    const menuToggle = isActive ? 'menu active' : 'menu';

    const navCategories = ['how we work', 'blog', 'account', 'view plans'];
    return (
        <nav className={menuToggle}>
            {navCategories.map((category, index) => (
                <button key={index} className='menu__btn'>{category}</button>
            ))};
            <div className='menu__image'></div>
        </nav>
    )
}

export default Nav;