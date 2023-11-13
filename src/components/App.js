import React from "react";
import Navbar from "./Navbar";
import User from "./User";
import FeedList from "./FeedList";
import Bio from "./Bio";

function App(){
  return ( 
    <React.Fragment>
      <Navbar />
      {/* <hr /> */}
      <div className="container">
        <div className="user-container">
          <User />
          <div className="user-bio">
            <Bio />
          </div>
        </div>
        <div className="feed">
          
          <FeedList />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;