import React from "react";
import PropTypes from "prop-types";
import profilePicture from "./../img/pfp.jpg";

const Suggested = (props) => {
  return (
    <React.Fragment>
      <div className="suggested-user">
        <img src={profilePicture} alt="PFP" className="feed-pfp" />
        <div className="suggested-content">
          <h3>{props.name}</h3>
          <p>{props.post}</p>
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