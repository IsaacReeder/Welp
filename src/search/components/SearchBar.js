import React, { Component } from "react";

import { Box, Text, IconButton, Icon } from "gestalt";

import "./SearchBar.scss";

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      searchLocationQuery: ""
    };
  }

  handleSearchChange = e => {
    this.setState({
      searchLocationQuery: e.target.value
    });
  };

  handleFormSubmit = e => {
    e.preventDefault();

    this.props.onFormSubmit(this.state.searchLocationQuery);
  };
  render() {
    return (
      <Box
        color="white"
        shape="rounded"
        padding={3}
        display="flex"
        direction="row"
        alignItems="center"
      >
        <Box padding={3}>
          <Text align="center" weight="bold">
            I am looking for a brewery near
          </Text>
          <Icon
            icon="flashlight"
            color="red"
            size={20}
            accessibilityLabel="Flashlight"
          />
        </Box>
        {/* <Box flex="grow" paddingX={2}>
          <SearchField
            onSubmit={e => this.handleFormSubmit(e)}
            accessibilityLabel="Search Field"
            type="text"
            id="searchField"
            placeholder="address, neighbourhood, city, province or postal code"
            value={this.state.searchLocationQuery}
            onChange={this.handleSearchChange}
            className="searchForm__input"
          />
        </Box> */}
        {/* /////////////////////////// */}
        <div className="searchForm">
          {/*add an event listener of form submit so the state only get set when the form is submitted*/}
          <form onSubmit={e => this.handleFormSubmit(e)}>
            <label
              htmlFor="location"
              arialabel="enter address, neighbourhood, city, province or postal code"
              className="searchForm__label"
            ></label>
            <input
              type="text"
              id="location"
              placeholder="address, city, or postal code"
              value={this.state.searchLocationQuery}
              onChange={this.handleSearchChange}
              className="searchForm__input"
            />
          </form>
          <button type="submit" className="searchForm__button">
            Search
            {/* <FontAwesomeIcon
                icon="search-location"
                className="searchForm__icon"
              /> */}
          </button>
        </div>
        {/* ///////////////////////////// */}
        <Box paddingX={2}>
          <IconButton
            accessibilityLabel="Notifications"
            icon="speech-ellipsis"
            size="md"
          />
        </Box>
        {/* <Box paddingX={2}>
        <IconButton accessibilityLabel="Profile" icon="person" size="md" />
      </Box> */}
      </Box>
    );
  }
}

export default SearchBar;
