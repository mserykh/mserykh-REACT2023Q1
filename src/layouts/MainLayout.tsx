import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

export class MainLayout extends Component {
  render() {
    return (
      <div className='flex flex-col min-h-screen'>
        <Header />
        <Outlet />
        <Footer />
      </div>
    );
  }
}
