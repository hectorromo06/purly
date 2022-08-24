import './App.css';
import React, { useState } from 'react';

function App() {
 // navigation options
 const [navOptions] = useState(['Login', 'Dashboard', 'About Us', 'Pattern']);

 // Setting the current render to Login
  // setCurrentNavOp is used to change the navOption
  const [currentNavOp, setCurrentNavOp] = useState(navOptions[0]);
  

  return (
    <div>
      <Header
        // passing variables to Header component
        navOptions={navOptions}
        currentNavOp={currentNavOp}
        setCurrentNavOp={setCurrentNavOp}
      />
      { // if currentNavOp is 'Login' render Login page
        currentNavOp === 'Login' &&
        <Login />
      }
      { // if currentNavOP is 'Dashboard' render Dashboard component
        currentNavOp === 'Dashboard' &&
        <Dashboard />
      }
      { // if cuurentNavOp is 'About Us' render About Us component
        currentNavOp === 'About Us' &&
        <About />
      }
      { // if cuurentNavOp is 'Pattern' render Pattern component
        currentNavOp === 'Pattern' &&
        <Pattern />
      }
    </div>
  );
}

export default App;
