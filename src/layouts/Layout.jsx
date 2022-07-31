import React from 'react';
import { Outlet } from 'react-router-dom';

// eslint-disable-next-line arrow-body-style
const Layout = () => {
  return (
    <main className='h-screen flex flex-col'>
      <nav className='bg-orange-400 pb-4'>
        <h1> Andrea Calderon Zuluaga</h1>
        <h2> Student of Computer Science</h2>
      </nav>
      <div className='h-full'>
        <Outlet />
      </div>
    </main>
  );
};

export default Layout;
