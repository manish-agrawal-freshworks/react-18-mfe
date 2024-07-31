import { mountReactApp } from './main.jsx';
import indexStyle from './index.css?inline';

class newMFE extends HTMLElement {
  connectedCallback() {
    const mountable = document.createElement('div');
    mountable.id = 'mfe-root';
    this.attachShadow({ mode: 'open' }).appendChild(mountable);

    this.addStyles();

    this.shadowRoot.appendChild(mountable);
    mountReactApp({ element: mountable, options: this.options });
  }

  addStyles() {
    const id = 'react-18-mfe-style';
    const style = document.createElement('style');
    style.id = id;
    style.appendChild(document.createTextNode(indexStyle));
    this.shadowRoot?.appendChild(style);
  }
}

customElements.define('new-react-18-mfe', newMFE);


// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';

// import { RouterProvider } from 'react-router-dom';
// import { generateRouter } from './router.jsx';

// const appRoot =  document.getElementById('root');
// const root = ReactDOM.createRoot(appRoot);

// //  initialize services from using options passed from the host
// //  eg: coreServices.init(options);

// root.render(
//   <React.StrictMode>
//     <RouterProvider router={generateRouter({ basename: '/' })} />
//   </React.StrictMode>
// );