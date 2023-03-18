import Card from '../components/Card';
import React, { Component } from 'react';

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
        <h1>This is main page</h1>
        <ul className="grid grid-cols-5 gap-5">
          {items.map((item) => (
           <Card {...item} />
          ))}
        </ul>
      </main>
    );
  }
}
