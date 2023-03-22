import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import React from 'react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { describe, it } from 'vitest';
import AboutPage from './pages/AboutPage';
import ErrorPage from './pages/ErrorPage';
import RootPage from './pages/RootPage';

const renderWithRouter = (route = '/') => {
  return render(
    <MemoryRouter initialEntries={[route]}>
      <Routes>
        <Route path="/" element={<RootPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </MemoryRouter>
  );
};

const mockResponse = [
  {
    id: 1,
    title: 'iPhone 9',
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
  },
  {
    id: 2,
    title: 'iPhone X',
    price: 899,
    discountPercentage: 17.94,
    rating: 4.44,
    stock: 34,

    thumbnail: 'https://i.dummyjson.com/data/products/2/thumbnail.jpg',
  },
  {
    id: 3,
    title: 'Samsung Universe 9',
    price: 1249,
    discountPercentage: 15.46,
    rating: 4.09,
    stock: 36,

    thumbnail: 'https://i.dummyjson.com/data/products/3/thumbnail.jpg',
  },
  {
    id: 4,
    title: 'OPPOF19',
    description: 'OPPO F19 is officially announced on April 2021.',
    price: 280,
    discountPercentage: 17.91,
    rating: 4.3,
    stock: 123,
    thumbnail: 'https://i.dummyjson.com/data/products/4/thumbnail.jpg',
  },
];

const server = setupServer(
  rest.get('https://dummyjson.com/products', (req, res, ctx) => {
    return res(ctx.json(mockResponse));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Router', () => {
  it('Renders Main page', async () => {
    renderWithRouter('/');
    await waitFor(() =>
      expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Buy at Better buy!')
    );
  });
  it('Renders About page', () => {
    renderWithRouter('/about');
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('About');
  });
  it('Renders Error page', () => {
    renderWithRouter('/not-found');
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('404');
  });
});
