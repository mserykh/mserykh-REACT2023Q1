import { render, screen } from '@testing-library/react';
import React from 'react';
import Card, { CardProps } from './Card';

const props: CardProps = {
  id: '1',
  title: 'Product Title',
  description: 'Product Description',
  price: 20,
  discountPercentage: 10,
  rating: 4,
  stock: 10,
  brand: 'Brand Name',
  category: 'Category Name',
  thumbnail: 'https://example.com/image.jpg',
  images: ['https://example.com/image.jpg'],
};

describe('Card', () => {
  test('renders product information correctly', () => {
    render(<Card {...props} />);
    const title = screen.getByRole('heading', { level: 3 });
    const price = screen.getByText(
      `${Math.round(props.price - (props.price * props.discountPercentage) / 100)}€`
    );
    const rating = screen.getByText(`Rating: ${props.rating}`);
    const stock = screen.getByText(`${props.stock} items left`);
    const image = screen.getByAltText(props.title);
    expect(title).toBeInTheDocument();
    expect(price).toBeInTheDocument();
    expect(rating).toBeInTheDocument();
    expect(stock).toBeInTheDocument();
    expect(image).toHaveAttribute('src', props.thumbnail);
  });

  test('Shows "On sale" when discount percentage is > 0', () => {
    render(<Card {...props} />);
    const onSale = screen.getByText('On sale');
    expect(onSale).toBeInTheDocument();
  });

  test('does not show "On sale" when discount percentage === 0', () => {
    const updatedProps = { ...props, discountPercentage: 0 };
    render(<Card {...updatedProps} />);
    const onSale = screen.queryByText('On sale');
    expect(onSale).toBeNull();
  });

  test('shows "Out of stock" message when stock === 0', () => {
    const updatedProps = { ...props, stock: 0 };
    render(<Card {...updatedProps} />);
    const stock = screen.getByText('Out of stock');
    expect(stock).toBeInTheDocument();
  });
});
