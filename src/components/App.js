import React from "react";
import Navbar from "./Navbar";
import User from "./User";

function App(){
  return ( 
    <React.Fragment>
      <Navbar />
      <hr />
      <User />
    </React.Fragment>
  );
}

export default App;