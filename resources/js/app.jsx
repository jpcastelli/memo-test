// resources/js/app.js
import './bootstrap';

import React from 'react';
import ReactDOM from 'react-dom/client';

import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

import App from './components/App';

const client = new ApolloClient({
    uri: "http://localhost/graphql/",
    cache: new InMemoryCache()
});

if(document.getElementById('app')) {
    const root = ReactDOM.createRoot(document.getElementById('app'));
    
    root.render(
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    );
}


