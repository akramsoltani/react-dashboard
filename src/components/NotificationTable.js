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
import {Link} from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom' ;
import SkeletonChildren from 'components/Loader';

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

  if (loading) return <SkeletonChildren />;
  if (error) return <p>Error :(</p>;

  return data.notifications.map(({ id, type }) => (
    <Router><div key={id}>
      <Link style={{color: 'white'}} to={`/notifications/${id}`}>
      <p>
        {id}: {type}
      </p>
      </Link>
    </div>
    </Router>
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