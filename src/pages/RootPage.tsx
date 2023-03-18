import React, { Component } from 'react';
import Card, { CardProps } from '../components/Card';
import Container from '../components/Container';
import Header from '../components/Header';

type RootPageState = {
  isLoaded: boolean;
  items: CardProps[];
};

export class RootPage extends Component<Record<string, never>, RootPageState> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      isLoaded: false,
      items: [] as CardProps[],
    };
  }

  componentDidMount() {
    fetch('https://dummyjson.com/products?limit=12&skip=60')
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          isLoaded: true,
          items: result.products,
        });
      });
  }

  render() {
    const { items } = this.state;
    return (
      <main>
        <Header />
        <Container containerClass="py-4 w-full items-center mx-auto">
          <h1 className="sr-only">Buy at Better buy! Always a bargain with excellent quality! </h1>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
            {items.map((item) => (
              <Card {...item} key={item.id} />
            ))}
          </ul>
        </Container>
      </main>
    );
  }
}
