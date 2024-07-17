import React from 'react';

function Home() {
  const navigateToHostRoute = ({ route }) => {
    return parent.postMessage(
      { type: 'NAVIGATE', payload: { route } },
      window.location.origin,
    );
  };

  return (
    <section>
      <div>v18 - React MFE app home page</div>
      <button onClick={() => navigateToHostRoute({ route: '/ember-route' })}>
        Redirect to Host App
      </button>
    </section>
  );
}

export default Home;
