import React from 'react';
import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

function Layout() {
  const navigate = useNavigate();

  // Handle the message event from the host app
  useEffect(() => {
    const handleListener = (event) => {
      const { data } = event;
      if (data.type === 'navigateToAdminMfeHome') {
        navigate('/admin');
      } else if (data.type === 'navigateToHost') {
        navigate('/');
      }
    };
    window.addEventListener('message', handleListener);
    return () => window.removeEventListener('message', handleListener);
  }, [navigate]);

  return (
    <div className="admin-mfe">
      <Outlet />
    </div>
  );
}

export default Layout;
