import './App.css';

import React, { useState } from 'react';
// import Dashboard from './components/Dashboard';
import Header from './components/Header';
// import Account from './components/Account';



function App() {
  // nav options
  const [navOptions] = useState(['My Account', 'My Projects', 'Patterns']);

  const [currentNavOp] = useState(navOptions[0]);

  return (
    <div className="App">
      <Header 
       navOptions={navOptions}
       currentNavOp={currentNavOp}
      />
       {/* {
        currentNavOp === 'My Account' &&
        <Account />
       } */}


    </div>
  );
}

export default App;