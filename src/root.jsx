import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { MFEController, createMFEInstance } from './controller';

const APP_ID = 'taas-as-service-1';
const instanceId = MFEController.getInstanceId() || `taasmfe1`;

async function prepare() {
  return Promise.resolve()
}


export const rootConfig = {
  mount: async (container, appProps) => {
    console.log('React 18 - container ', container);
    console.log('React 18 - appProps ', appProps);
      const instanceId = appProps.instanceId;

      if (!container) {
          console.info(`APP - ${APP_ID} container not found`);
          return;
      }

      createMFEInstance(appProps.instanceId, appProps, container);

      console.info(
          `MOUNTING: instance ${instanceId} of app group ${APP_ID}, `,
          container,
          appProps
      );

      const root = ReactDOM.createRoot(container);

      prepare().then(() => {
          root.render(
            <React.StrictMode>
              <App {...appProps} />
            </React.StrictMode>
          )
      })

      return () => {
          console.info(`UNMOUNTING: instance ${instanceId} of app group ${APP_ID}`);
          root.unmount();
      };

  }
}

MFEController.registerAppInstance(instanceId, rootConfig);

window.onload = () => {
  const appProps = MFEController.getMFEQueryParams() || {};
  const container = document.getElementById('taas-as-service-root');

  rootConfig.mount(container, {
      ...appProps,
      title: 'test',
      instanceId: appProps.instanceId ?? 'taasmfe1',
  });
};