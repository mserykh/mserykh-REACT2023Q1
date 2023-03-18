import React, { Component } from 'react';
import Container from '../components/Container';

export class ErrorPage extends Component {
  render() {
    return (
      <main>
        <Container containerClass="py-4 w-full items-center mx-auto">
          <h1>404 | Sorry, page not found</h1>
        </Container>
      </main>
    );
  }
}
