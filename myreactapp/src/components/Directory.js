import React from "react";

const DirectoryList = (props) => {
    return(
        <tr>
    <th scope="row">{props.id}</th>
    <td><img alt={props.first} src={props.image}/></td>
    <td> Phone: {props.phone}</td>
    <td> Name: {props.first} {props.last}    </td>
    <td> Email {props.email}</td>
    <td> DOB: {props.dob}    </td>
    <td> ID: {props.id}    </td>
        </tr>
//need to replace the td to how we have the divs below




    //             <div className="row">
    // <div className="col-3-xs"><img alt={props.name} src={props.image} /></div>
    // <div className="col-2-xs">Phone: {props.phone}</div>
    // <div className="col-2-xs">Name: {props.first} {props.last}</div>
    // <div className="col-3-xs">Email {props.email}</div>
    //                 <div className="col-2-xs">DOB: {props.dob}</div>
    //             </div>
    )
}



function Directory(props) {



    return(

        <div className="container">
 
<table className="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Image</th>
      <th scope="col">Phone</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">DOB</th>
    </tr>
  </thead>
  <tbody>
  {props.employees.map((employee, i) => (
                <DirectoryList 
                    first={employee.name.first}
                    last={employee.name.last}
                    image={employee.picture.thumbnail}
                    phone={employee.phone}
                    email={employee.email}
                    dob={employee.dob.date}
                    id={i + 1}
                    key={employee.id.value}
                />
            ))}
  </tbody>
</table>








  {/* <div className="row">
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
  </div> */}
    </div>
    )
}

export default Directory;

