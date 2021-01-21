import React from 'react';
import ReactDOM from 'react-dom';
import 'index.css';
import App from 'App';
import reportWebVitals from 'reportWebVitals';
import './fonts/Roboto-Medium.ttf';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://react-recruitment.musbenlahrech.repl.co/',
  cache: new InMemoryCache()
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')  
);

reportWebVitals();