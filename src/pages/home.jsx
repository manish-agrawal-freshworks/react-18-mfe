import React from 'react';
import Component from 'react-mfe/src/pages/component';
import moment from 'moment';

function Home() {
  const navigateToHostRoute = ({ route }) => {
    return parent.postMessage(
      { type: 'NAVIGATE', payload: { route } },
      window.location.origin,
    );
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
      <div>v18 - React MFE app home page</div>
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full' onClick={() => navigateToHostRoute({ route: '/ember-route' })}>
        Redirect to Host App
      </button>
      <br />
      {momentLibInformation()}
      <br />
      <Component />
    </section>
  );
}

export default Home;
