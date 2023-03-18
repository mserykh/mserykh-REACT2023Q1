import React, { Component } from 'react';
import Icon from './Icon';

type SearchBarState = {
  searchValue: string;
};

class SearchBar extends Component<{}, SearchBarState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      searchValue: '',
    };
  }

  componentDidMount() {
    const searchValue = localStorage.getItem('searchValue') || '';
    this.setState({ searchValue });

    window.addEventListener('beforeunload', this.handleUnloadPage);
  }

  componentWillUnmount() {
    this.handleUnloadPage();
    window.removeEventListener('beforeunload', this.handleUnloadPage);
  }

  handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const inputValue = event.currentTarget.value;
    const searchValue = inputValue || '';
    this.setState({ searchValue });
  };

  handleUnloadPage = () => {
    const searchValue = this.state.searchValue || '';
    localStorage.setItem('searchValue', searchValue);
  };

  render() {
    const { searchValue } = this.state;

    return (
      <div className="flex w-full max-w-lg bg-white rounded-md">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <input
          value={searchValue}
          id="search"
          name="search"
          type="text"
          placeholder="What are you looking for?"
          className="rounded-md w-full py-2 px-4 text-zinc-600 placeholder:text-zinc-400 placeholder:font-thin"
          onChange={this.handleChange}
        />

        <button className="py-2 border-0 px-4 rounded-md" aria-label="Search">
          <Icon type="search" className="w-8 fill-zinc-400" />
        </button>
      </div>
    );
  }
}

export default SearchBar;
