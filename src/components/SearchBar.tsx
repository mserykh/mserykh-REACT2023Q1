import React, { Component, createRef } from 'react';

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
  }

  render() {
    const { searchValue } = this.state;

    return (
      <div className="bg-amber-400 p-2">
        <label htmlFor="search">
          <input
            value={searchValue}
            id="search"
            name="search"
            type="text"
            placeholder="What are you looking for?"
            className="w-full max-w-xs p-2 rounded-md placeholder:text-zinc-400 placeholder:font-thin"
            onChange={this.handleChange}
          />
        </label>
        <button className="py-2 border-0 px-4 rounded-md">Find</button>
      </div>
    );
  }
}

export default SearchBar;
