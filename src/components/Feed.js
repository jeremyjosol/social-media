import React from "react";
import PropTypes from "prop-types";
import profilePicture from "./../img/pfp.jpg";

const Feed = (props) => {
  return (
    <React.Fragment>
      <div className="post">
      </div>
      <div className="user-post">
        <img src={profilePicture} alt="PFP" className="feed-pfp" />
        <div className="feed-content">
          <h4>{props.name}</h4>
          <p>{props.post}</p>
        </div>
      </div>
    </React.Fragment>
  );
}

Feed.propTypes = {
  profilePicture: PropTypes.string,
  name: PropTypes.string.isRequired,
  post: PropTypes.string.isRequired
};

export default Feed;