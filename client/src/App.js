import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Navbar from "./components/Navbar"


import Login from "./pages/Login";
import Signup from "./pages/Signup";
import SinglePattern from "./pages/SinglePattern"
import Search from "./pages/Search";
import AddPattern from './components/AddPattern';
import Dashboard from "./pages/Dashboard";

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

  return (
    <ApolloProvider client={client}>
       <Router>

        <div>
          <Navbar />
          <div>
          <Routes>
          <Route
            path = '/login'
            element={<Login />}
            />
            <Route
            path = '/search'
            element={<Search />}
            />
            <Route
            path = '/pattern/:id'
            element={<SinglePattern />}
            />
            <Route
            path = '/signup'
            element={<Signup />}
            />
            <Route
            path = '/addpattern'
            element={<AddPattern />}
            />
            <Route
            path='/dashboard'
            element={<Dashboard/>}
            />
      </Routes>
      </div>
      </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;