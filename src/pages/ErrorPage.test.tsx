import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, it } from 'vitest';

import ErrorPage from './ErrorPage';

describe('Error page', () => {
  it('Renders Root', () => {
    render(<ErrorPage />);
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('404');
  });
});
