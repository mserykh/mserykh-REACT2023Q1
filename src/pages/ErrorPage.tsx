import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/Container';

function ErrorPage() {
  return (
    <main>
      <Container containerClass="flex flex-col gap-6 py-4 w-full items-center mx-auto min-h-screen justify-center">
        <h1>404 | Sorry, page not found</h1>
        <Link
          to="/"
          className="py-4 px-8 bg-amber-400 text-white text-2xl font-semibold rounded-md hover:text-black transition-colors"
        >
          Go to Main page
        </Link>
      </Container>
    </main>
  );
}

export default ErrorPage;
