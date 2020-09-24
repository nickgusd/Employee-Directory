import React, { Component } from "react";
import SearchForm from "./SearchForm";
import API from "../utils/API";
import Header from "./components/Header";
import Directory from "./components/Directory";

class SearchResultContainer extends Component {

state = {
    search: "",
    results: []
}

componentDidMount() {
    this.getEmployees("");
  }

  getEmployees = () => {
    API.search()
    //   .then(res => this.setState({ results: res.data.data }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const {name, value} = event.target
    // const name = event.target.name;
    // const value = event.target.value;
    this.setState({
      [name]: value
    });
  };








render() {
    return (
        <div>
            
        </div>



    )
}

}