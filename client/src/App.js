import './App.css';
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Login from "./pages/Login";
import SignupForm from "./components/SignupForm";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar"
const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
 // navigation options
 const [navOptions] = useState(['Login', 'Dashboard', 'About Us', 'Pattern']);

 // Setting the current render to Login
  // setCurrentNavOp is used to change the navOption
  const [currentNavOp, setCurrentNavOp] = useState(navOptions[0]);
  

  return (
    <ApolloProvider client={client}>
       <Router>
        <div>
          <Navbar></Navbar>
        <Routes>
      {/* <Header
        // passing variables to Header component
        navOptions={navOptions}
        currentNavOp={currentNavOp}
        setCurrentNavOp={setCurrentNavOp}
      /> */}
      {/* { // if currentNavOp is 'Login' render Login page
        currentNavOp === 'Login' &&
        <Login />
      } */}
      {/* { // if currentNavOP is 'Dashboard' render Dashboard component
        currentNavOp === 'Dashboard' &&
        <Dashboard />
      } */}
      {/* { // if cuurentNavOp is 'About Us' render About Us component
        currentNavOp === 'About Us' &&
        <About />
      } */}
      {/* { // if cuurentNavOp is 'Pattern' render Pattern component
        currentNavOp === 'Pattern' &&
        <Pattern />
      } */}
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signup-form" element={<SignupForm />} />
      
      </Routes>
      </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
