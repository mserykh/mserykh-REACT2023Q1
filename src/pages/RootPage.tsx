import Container from '../components/Container';
import React, { Component } from 'react';
import Card from '../components/Card';
import SearchBar from '../components/SearchBar';

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
    fetch('https://dummyjson.com/products')
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
        <Container containerClass="py-4 w-full items-center mx-auto">
          <h1>This is main page</h1>
          <SearchBar />
          <ul className="grid grid-cols-5 gap-5">
            {items.map((item) => (
              <Card {...item}  key={item.id} />
            ))}
          </ul>
        </Container>
      </main>
    );
  }
}
