import React, { Component } from 'react';
import Icon from './Icon';

type SearchBarState = {
  searchValue: string;
};

class SearchBar extends Component<Record<string, never>, SearchBarState> {
  constructor(props: Record<string, never>) {
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
      <form className="max-w-lg w-full focus-within:after focus-within:after:z-30 focus-within:after:fixed focus-within:after:top-0 focus-within:after:bottom-0 focus-within:after:block focus-within:after:left-0 focus-within:after:right-0 focus-within:after:bg-zinc-800 focus-within:after:opacity-30 focus-within:after:pointer-events-auto group">
        <div className="relative p-1.5 flex w-full  bg-white rounded-full group-focus-within:z-50 ">
          <label htmlFor="search" className="sr-only">
            Search
          </label>
          <input
            value={searchValue}
            id="search"
            name="search"
            type="text"
            autoComplete="off"
            placeholder="What are you looking for?"
            className="w-full pl-6 bg-transparent pr-4 text-zinc-600 group-focus-within:z-40 placeholder:text-zinc-400 placeholder:font-thin"
            onChange={this.handleChange}
          />

          <button
            className="p-2 border-0 rounded-full transition-all group-focus-within:z-40 hover:bg-zinc-400 group/button"
            aria-label="Search"
          >
            <Icon
              type="search"
              className="w-7 h-7 transition-all fill-zinc-400 group-hover/button:fill-white"
            />
          </button>
        </div>
      </form>
    );
  }
}

export default SearchBar;
