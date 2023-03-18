import React, { Component } from 'react';

type CardProps = {
  id: string;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

class Card extends Component<CardProps> {
  constructor(props: CardProps) {
    super(props);
  }

  render() {
    const {
      id,
      title,
      description,
      price,
      discountPercentage,
      rating,
      stock,
      brand,
      category,
      thumbnail,
      images,
    } = this.props;

    return (
      <li className="relative flex flex-col border border-zinc-100 rounded-xl drop-shadow-md bg-white">
        <div className="p-4">
          <h2 className="text-2xl font-semibold">{title}</h2>
          <p>Rating: {rating}</p>
          <p>
            {discountPercentage && discountPercentage > 0 ? (
              <span>
                <s >{`${price}€`}</s>
                <span className='text-xl font-medium'>{` ${Math.round(price - (price * discountPercentage) / 100)}€`}</span>
              </span>
            ) : (
              <span className='font-medium'>{`${price}€`}</span>
            )}
          </p>
          {discountPercentage > 0 && (
            <span className="block z-20 absolute top-4 p-1.5 bg-amber-800 rounded-full text-white font-semibold text-xs">
              On sale
            </span>
          )}
          <span>{stock > 0 ? `${stock} items left` : 'Out of stock'}</span>
        </div>
        <div className="relative rounded-md rounded-b-none -order-1 w-full h-48 overflow-hidden">
          <img src={thumbnail} alt={title} className="block absolute w-full h-full object-cover" />
        </div>
      </li>
    );
  }
}

export default Card;
