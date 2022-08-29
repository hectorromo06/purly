import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';


const Navbar = () => {
  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <div className="nav">

      <div className='nav-header'>
       <h1 className='nav-title'>Purly</h1>
      </div>
      <div className="nav-links">
        <Link to="/search">Search</Link>
        {Auth.loggedIn() ? (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <a href="/" onClick={logout}>
              Logout
            </a>
            
          </>
        ) : (
          <>
           <Link to="/login">Login</Link>
           <Link to="/signup">Sign Up</Link>
          </>

        )}
      </div>
    </div>
);
};

export default Navbar;