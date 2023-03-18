import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from './layouts';
import { AboutPage, ErrorPage, RootPage } from './pages';

export const router = createBrowserRouter([
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
