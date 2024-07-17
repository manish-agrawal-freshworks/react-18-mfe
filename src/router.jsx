import { createBrowserRouter } from 'react-router-dom';

import Home from './pages/home';
import Layout from './pages/layout';

export const generateRouter = () => {
  return createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
    {
      path: '/react-route',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
    {
      path: '/taas-react-18',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
    // {
    //   path: '/taas-react-16',
    //   element: <Layout />,
    //   children: [
    //     {
    //       index: true,
    //       element: <Home />,
    //     },
    //   ],
    // },
  ]);
};
