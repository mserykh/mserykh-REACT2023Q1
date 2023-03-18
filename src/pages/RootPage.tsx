import React, { Component } from 'react';
import Card from '../components/Card';
import Container from '../components/Container';
import Header from '../components/Header';

type RootPageProps = {};

type RootPageState = {
  error: any;
  isLoaded: boolean;
  items: any[];
};

export class RootPage extends Component<RootPageProps, RootPageState> {
  constructor(props: RootPageProps) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
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
    const { error, isLoaded, items } = this.state;
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
