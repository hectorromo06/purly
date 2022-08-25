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


import Search from "./pages/Search";


const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
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
//  // navigation options
//  const [navOptions] = useState(['Login', 'Dashboard', 'About Us', 'Pattern']);

//  // Setting the current render to Login
//   // setCurrentNavOp is used to change the navOption
//   const [currentNavOp, setCurrentNavOp] = useState(navOptions[0]);
  

  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route path="/" element={<Search />} />
      </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
