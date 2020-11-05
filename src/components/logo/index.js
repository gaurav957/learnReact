import React from 'react';
import mylogo from '../../assests/logo.webp';
import './logo.css';

function Logo(){
    return(
        <div className='logo'> <img src={mylogo} /></div>
    )
}

export default Logo