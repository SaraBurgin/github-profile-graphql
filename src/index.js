import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ApolloClient from 'apollo-boost';
import Githubprofile from './GitHubProfile';
import { ApolloProvider } from '@apollo/react-hooks';

const client = new ApolloClient({
  uri: 'https://graphqlhub.com/graphql',
});

ReactDOM.render(
  <ApolloProvider client={client}>
    {' '}
    <Githubprofile />
  </ApolloProvider>,
  document.getElementById('root'),
);
