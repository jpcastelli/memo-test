// resources/js/app.js
import './bootstrap';

import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    RouterProvider,
  } from "react-router-dom";
  import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
  import { ThemeProvider } from '@mui/material/styles';
  import  Router  from './routes/Router';
  import theme from './theme';


const client = new ApolloClient({
    uri: "http://localhost/graphql/",
    cache: new InMemoryCache()
});

if(document.getElementById('app')) {
    const root = ReactDOM.createRoot(document.getElementById('app'));
    
    root.render(
        <React.StrictMode>
          <ThemeProvider theme={ theme }>
            <ApolloProvider client={ client }>
                <RouterProvider router={ Router } />
            </ApolloProvider>
            </ThemeProvider>
        </React.StrictMode>
    );
}


