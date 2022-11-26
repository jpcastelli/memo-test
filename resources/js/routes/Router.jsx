import App from '../components/App';
import Header from '../components/Header';
import MemoGame from '../components/MemoGame';

import {
    createBrowserRouter
  } from "react-router-dom";
  
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <><Header /><App /></>,
    },
    {
        path: "/game",
        element: <><Header /><MemoGame /></>,
      },
  ]);

export default routes;
