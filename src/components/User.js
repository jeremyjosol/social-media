import React from "react";
import profilePicture from "./../img/pfp.jpg";

function User() {
  return (
    <React.Fragment>
      <div className="user">
        <div className="banner">
        </div>
        <div className="user-header">
          <img src={profilePicture} alt="PFP" className="profile-picture" />
          <h2 className="username">Jeremy Josol</h2>
        </div>
        <ul className="info">
          <li className="info-posts"><a href="/" className="info-link">POSTS</a></li>
          <li className="info-following"><a href="/following" className="info-link">FOLLOWING</a></li>
          <li className="info-followers"><a href="/followers" className="info-link">FOLLOWERS</a></li>
        </ul>
      </div>
      
    </React.Fragment>
  );
}

export default User;