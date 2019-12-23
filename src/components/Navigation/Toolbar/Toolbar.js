import React from 'react';
import classes from './Toolbar.css';

// functional component
// passing props and outputing jsx
const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <div>MENU</div>
        <div>LOGO</div>
        <nav></nav>
    </header>
);

export default toolbar;