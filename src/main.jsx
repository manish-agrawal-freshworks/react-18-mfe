import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { generateRouter } from './router.jsx';

export const mountReactApp = ({ element, options }) => {
  console.debug(options);
  const appRoot = element || document.getElementById('root');
  const root = ReactDOM.createRoot(appRoot);

  //  initialize services from using options passed from the host
  //  eg: coreServices.init(options);

  root.render(
    <React.StrictMode>
      <RouterProvider router={generateRouter({ basename: '/' })} />
    </React.StrictMode>,
  );
};
