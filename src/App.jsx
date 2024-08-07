import React from "react";
import moment from 'moment';
import { MFEController } from './controller';

const appProps = {};

const App = (props) => {
  const instanceId = props.instanceId;
  const shellUrl = props.shellUrl;
  console.log('app props ', props);

  const navigateToHostRoute = ({ route }) => {
      return parent.postMessage(
        { type: 'NAVIGATE', payload: { route } },
        window.location.origin,
      );
    };
  
  const alertOnShell = () => {
    console.log('alert clicked - 18');
    MFEController.namespace(instanceId).publish({
      eventName: 'from_child_react_18',
      action: {
        type: 'from_child react-18-mfe',
        sender: 'react-18-mfe',
      },
      payload: { key: 'from child react-18-mfe' },
      targetOrigin: shellUrl,
    });
  };

  const momentLibInformation = () => {
      return (
        <>
          Moment version : {moment.version}<br />
          Weeks in year : {moment().weeksInYear()}<br />
          Moment feature available in {moment.version}: <span className="text-green-600">moment().weeksInYear()</span>
        </>
      )
  }
  return (
      <section>
          <div><b>v18</b> - React MFE app home page</div>
          {/* <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full' onClick={() => navigateToHostRoute({ route: '/ember-route' })}>
          Redirect to Host App
          </button> */}
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full' onClick={() => alertOnShell()}>
            Alert on Ember
          </button>
          <br />
          {momentLibInformation()}
          <br />
          {/* <Component /> */}
          ------------------------------------------------- <br />
          ------------------------------------------------- <br />
          <mfe-application
              app-id       = 'taas-as-service-2'
              instance-id  = 'taasmfe2'
              id           = 'taas-as-service-2'
              registry-url = 'http://localhost:4142/'
              version      = '0.0.1'
              appProps     = {{appProps}}>
          </mfe-application>
          ------------------------------------------------- <br />
          ------------------------------------------------- <br />
    </section>
  )
}

export default App;
