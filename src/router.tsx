import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import ErrorPage from './pages/ErrorPage';
import RootPage from './pages/RootPage';
import AboutPage from './pages/AboutPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <RootPage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

export default router;
