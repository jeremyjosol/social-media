import React from "react";
import PropTypes from "prop-types";

const Feed = (props) => {
  return (
    <React.Fragment>
        <div className="feed-pfp">
          {props.profilePicture}
        </div> 
        <h3>{props.name}</h3>
        <p><em>{props.post}</em></p>
        <hr/>
    </React.Fragment>
  );
}

Feed.propTypes = {
  profilePicture: PropTypes.string,
  name: PropTypes.string.isRequired,
  post: PropTypes.string.isRequired
};

export default Feed;