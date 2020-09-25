import React from "react";


const styles = {
  headerStyle: {
    background: "#002699"
  }
  
}

const h1 = {
  color: "white",
  textAlign: "center"
}



function Header(props) {
  return (
    <div className="main-container" >
      <div className="container" >
        <div className="jumbotron" style={styles.headerStyle}>
          <h1 style={h1}>Employee Directory</h1>
          
        </div>
      </div>
    </div>
  );
}

export default Header;
