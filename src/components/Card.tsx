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
      <li className="border border-zinc-100 rounded-xl overflow-hidden drop-shadow-md bg-white p-4">
        <div>
          <h2 className="text-2xl font-semibold">{title}</h2>
          <p>
            {discountPercentage && discountPercentage > 0
              ? `${price}€ ${price - (price * discountPercentage) / 100}€`
              : `${price}€`}
          </p>
          <span>{discountPercentage}% OFF</span>
          <span>{stock > 0 ? `${stock} items left` : 'Out of stock'}</span>
        </div>
        <div>
          <img src={thumbnail} alt={title} />
        </div>
      </li>
    );
  }
}

export default Card;
