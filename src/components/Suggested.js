import React from "react";
import PropTypes from "prop-types";
import profilePicture from "./../img/pfp.jpg";

const Suggested = (props) => {
  return (
    <React.Fragment>
      <div className="suggested-user">
        <img src={profilePicture} alt="PFP" className="suggested-pfp" />
        <div className="suggested-content">
          <h4>{props.name}</h4>
          <div className="follow">
            <button className="btn btn-primary follow" type="button">Follow</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

Suggested.propTypes = {
  profilePicture: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default Suggested;