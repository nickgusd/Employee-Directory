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
    </div>
    )
}

export default Directory;

