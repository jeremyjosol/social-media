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
      <div className="user-bio">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </React.Fragment>
  );
}

export default User;