import React from "react";

function Navbar() {
  return (
    <React.Fragment>
      <div className="user">
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