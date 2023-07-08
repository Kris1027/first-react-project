import React from 'react';
import Header from './header';
import Nav from './nav';
import Main from './main';

function Wrapper() {
    return (
        <div className='wrapper'>
            <Header />
            <Nav />
            <Main />
        </div>
    )
}

export default Wrapper;