// resources/js/app.js
import './bootstrap';

import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
    Route,
  } from "react-router-dom";
  import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

import App from './components/App';
import Game from './components/Game';

const client = new ApolloClient({
    uri: "http://localhost/graphql/",
    cache: new InMemoryCache()
});

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
        path: "/game",
        element: <Game />,
      },
  ]);

if(document.getElementById('app')) {
    const root = ReactDOM.createRoot(document.getElementById('app'));
    
    root.render(
        <React.StrictMode>
            <ApolloProvider client={client}>
                <RouterProvider router={router} />
            </ApolloProvider>
        </React.StrictMode>
        
    );
}


