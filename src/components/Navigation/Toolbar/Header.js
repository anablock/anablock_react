import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <nav>
            <div className = "nav-wrapper">
                <Link to={'/'} className="brand-logo">Home</Link>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><Link to={'/services'} className="brand-logo">Salesforce Services</Link></li>
                    <li><Link to={'/about'} className="brand-logo">About US</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;