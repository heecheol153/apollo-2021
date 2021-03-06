import React from 'react';
import { render } from 'react-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from "@apollo/client";

const client = new ApolloClient({
  uri: 'https://movieql.now.sh/',
  cache: new InMemoryCache()
});

function App() {
  return (
    <div>
      <h2>My first Apollo app 🚀</h2>
    </div>
  );
}

render(
  <ApolloProvider  client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
