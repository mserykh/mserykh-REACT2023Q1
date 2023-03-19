import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Nav from '../components/Nav';

function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}

export default MainLayout;
