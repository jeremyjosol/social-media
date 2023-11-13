import React from "react";

function Navbar() {
  return (
    <React.Fragment>
      <div className="navbar">
        <ul className="nav">
          <li className="nav-home"><a href="/" className="nav-link">Home</a></li>
          <li className="nav-notifications"><a href="/about" className="nav-link">Notifications</a></li>
          <li className="nav-messages"><a href="/contact" className="nav-link">Messages</a></li>
        </ul>
        <form className="form-inline">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Search" />
            <div className="input-group-append">
              <button className="btn btn-success btn-sm" type="button">Post</button>
            </div>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}

export default Navbar;