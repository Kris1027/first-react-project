import React from 'react';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';

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