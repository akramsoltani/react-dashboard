import React from 'react';
import 'App.css';
import { render } from 'react-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";

const client = new ApolloClient({
  uri: "https://react-recruitment.musbenlahrech.repl.co/",
  cache: new InMemoryCache()
});

function NotificationQuery() {
  const { loading, error, data } = useQuery(gql`
    {
      notifications {
  id
  type
}
    }
  `);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.notifications.map(({ id, type }) => (
    <div key={id}>
      <p>
        {id}: {type}
      </p>
    </div>
  ));
}

function NotificationTable() {
  return (
    <ApolloProvider client={client}>
      <div>
        <h2>Apollo Query Test</h2>
        <NotificationQuery />
      </div>
    </ApolloProvider>
  ); 
}

render(<NotificationTable />, document.getElementById('root'));


export default NotificationTable;