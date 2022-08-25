import './App.css';

import React, { useState } from 'react';
import Home from './pages/Homepage';
// import Dashboard from './components/Dashboard';
// import Account from './components/Account';



function App() {
  // nav options
  // const [navOptions] = useState(['My Account', 'My Projects', 'Patterns']);

  // const [currentNavOp] = useState(navOptions[0]);

  return (
    <div className="App">
      <Home />
       {/* {
        currentNavOp === 'My Account' &&
        <Account />
       } */}


    </div>
  );
}

export default App;