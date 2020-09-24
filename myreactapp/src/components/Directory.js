import React from "react";

function Directory(props) {




    return(

        <div className="container">
  <div className="row">
    <div className="col">
      Image
      <ul className="list-group">
      {props.employees.map(employee => (
        <li className="list-group-item" key={employee.id.value}>
          <img alt="employee" src={employee.picture.thumbnail} />
        </li>
      ))}
    </ul>
    </div>


    <div className="col">
      Phone
      <ul className="list-group">
      {props.employees.map(employee => (
        <li className="list-group-item" key={employee.id.value}>
          {employee.phone}
        </li>
      ))}
    </ul>
    </div>


    <div className="col">
      Name
      <ul className="list-group">
      {props.employees.map(employee => (
        <li className="list-group-item" key={employee.id.value}>
          {employee.name.first} {employee.name.last}
        </li>
      ))}
    </ul>
    </div>


    <div className="col">
      Email
      <ul className="list-group">
      {props.employees.map(employee => (
        <li className="list-group-item" key={employee.id.value}>
          {employee.email} 
        </li>
      ))}
    </ul>
    </div>

    <div className="col">
     Dob
     <ul className="list-group">
      {props.employees.map(employee => (
        <li className="list-group-item" key={employee.id.value}>
          {employee.dob.date} 
        </li>
      ))}
    </ul>
    </div>
  </div>
    </div>
    )
}

export default Directory;

