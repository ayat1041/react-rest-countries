import React from 'react';
import "./Header.css";
export default function Header(){
    return (
        <div>
            <h1>Welcome to my Rest Countries</h1>
            <nav className='menu bg-warning'>
                <a href="/home">Home</a>
                <a href="/countries">Countries</a>
                <a href="/about">About Us</a>
            </nav>
        </div>
    );
};

// export default Header;