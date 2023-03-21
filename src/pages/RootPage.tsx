import React, { Component } from 'react';
import Card, { CardProps } from '../components/Card';
import Container from '../components/Container';
import SearchCartBar from '../components/SearchCartBar';

type RootPageState = {
  items: CardProps[];
};

class RootPage extends Component<Record<string, never>, RootPageState> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      items: [] as CardProps[],
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch('https://dummyjson.com/products?limit=12&skip=60');
      const result = await response.json();
      this.setState({
        items: result.products,
      });
    } catch (error) {
      console.log('error fetching');
    }
  }

  render() {
    const { items } = this.state;
    return (
      <main>
        <Container containerClass="py-2 w-full mx-auto">
          <h1 className="text-2xl">Main page</h1>
        </Container>
        <SearchCartBar />
        <Container containerClass="py-4 w-full mx-auto">
          <h2 className="sr-only">Buy at Better buy! Always a bargain with excellent quality!</h2>
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

export default RootPage;
