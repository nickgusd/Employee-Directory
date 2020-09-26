import React from "react";


const style ={
  width: "50%",
  margin: "0 auto"
}

const styleButton = {
  margin: "10px auto"
}

function SearchForm(props) {
  return (
    <form>
      <div className="form-group" style={style}>
        <label htmlFor="search"></label>
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search for an Employee"
          id="search"
        />
        <button onClick={props.handleFormSubmit} className="btn btn-primary mt-3" style={styleButton}>
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;