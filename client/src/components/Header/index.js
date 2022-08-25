import React, { useState } from 'react';
import Navbar from '../Navbar';

function Header(props) {
    // destructure props
    const {
      navOptions = [],
      currentNavOp,
    } = props;

    const [navOpSelected] = useState(false);

return (
    <header>
        <h1>
            <a href='/'>Purly</a>
        </h1>
        <Navbar
            // passing variables to Header component
            navOptions={navOptions}
            currentNavOp={currentNavOp}
            navOpSelected={navOpSelected}
        />
    </header>
    )
}

export default Header;