import React, { Component } from "react";
import SearchForm from "./SearchForm";
import API from "../utils/API";
import Header from "./Header";
import Directory from "./Directory";

class SearchResultContainer extends Component {

state = {
    search: "",
    results: [],
    // employees: []
}

componentDidMount() {
    this.runSearch("");
  }

  runSearch = () => {
    API.getEmployees()
      .then(res => {
        this.setState({ results: res.data.results })
        console.log(res)
      }
        )
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    // const {name, value} = event.target
    // const name = event.target.name;
    // const value = event.target.value;
    this.setState({
    //   [name]: value
    search: event.target.value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.runSearch(this.state.search)
    .then(res => {
        this.setState({search: res.data.results.name})
    })
    console.log(this.state.search)


  };



render() {
    return (
        <div>
        <Header />
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <Directory employees={this.state.results}/>
        </div>

    )
}
}

export default SearchResultContainer;