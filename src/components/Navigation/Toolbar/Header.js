import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <nav>
            <div className="nav-wrapper blue accent-3">
                <Link to={'/'} className="brand-logo">Anablock</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="sass.html">About</a></li>
                    <li><a href="badges.html">Community</a></li>
                    <li><a href="collapsible.html">Sevices</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;