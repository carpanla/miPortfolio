import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/components/header.scss';

function Header(){
    return(
        <nav>
            <ul className="list">
                <li className="list__element">
                    <Link to="/mainpage/about">About</Link>
                </li>
                <li className="list__element">
                    <Link to="/mainpage/contact">Contact</Link>
                </li>
                {/* <li className="list__element">
                    <Link to="/">Home</Link>
                </li> */}
            </ul>
        </nav>  
    )
}

export default Header;
