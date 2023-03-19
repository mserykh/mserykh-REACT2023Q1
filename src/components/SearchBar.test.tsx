import { render, screen } from '@testing-library/react';
import React from 'react';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
  beforeAll(() => {
    localStorage.setItem('searchValue', 'first test value');
  });

  afterAll(() => {
    localStorage.removeItem('searchValue');
  });

  it('Renders input with initial value from Local Storage', () => {
    render(<SearchBar />);
    const inputElement = screen.getByRole('textbox') as HTMLInputElement;
    expect(inputElement.value).toBe('first test value');
  });

  test('Saves input value to Local Storage on page unload', () => {
    render(<SearchBar />);
    window.dispatchEvent(new Event('beforeunload'));
    expect(localStorage.getItem('searchValue')).toBe('first test value');
  });
});
