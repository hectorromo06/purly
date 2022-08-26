import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';


const Navbar = () => {
  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header className="">
    <div className="">
      <Link to="/">
        <h1>Purly</h1>
      </Link>

      <nav className="">
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
      </nav>
    </div>
  </header>
);
};

export default Navbar;