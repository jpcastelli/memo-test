import App from '../components/App';
import MemoGame from '../components/MemoGame';

import {
    createBrowserRouter
  } from "react-router-dom";
  
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
        path: "/game",
        element: <MemoGame />,
      },
  ]);

export default routes;
