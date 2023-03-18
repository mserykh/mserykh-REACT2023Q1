import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Nav from '../components/Nav';

export class MainLayout extends Component {
  render() {
    return (
      <div className="flex flex-col min-h-screen">
        <Nav />
        <Outlet />
        <Footer />
      </div>
    );
  }
}
