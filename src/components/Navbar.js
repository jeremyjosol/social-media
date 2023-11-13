import React from "react";

function Navbar() {
  return (
    <React.Fragment>
      <div className="navbar">
        <ul className="nav">
          <li className="nav-item"><a href="/" className="nav-link">Home</a></li>
          <li className="nav-item"><a href="/about" className="nav-link">Notifications</a></li>
          <li className="nav-item"><a href="/contact" className="nav-link">Messages</a></li>
        </ul>
      </div>
    </React.Fragment>
  );
}

export default Navbar;