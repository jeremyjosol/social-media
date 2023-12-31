import React from "react";
import PropTypes from "prop-types";
import profilePicture from "./../img/pfp.jpg";

const Suggested = (props) => {
  return (
    <React.Fragment>
      <div className="suggested-user">
        {props.profilePicture}
        <div className="suggested-content">
          <h5>{props.name}</h5>
          <p class="small">Location: {props.location}</p>
          <p class="small">Bio: {props.bio}</p>
          <div className="follow">
            <button className="btn btn-primary follow" type="button"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11 14s1 0 1-1-1-4-6-4-6 3-6 4 1 1 1 1h10zm-9.995-.944v-.002.002zM1.022 13h9.956a.274.274 0 00.014-.002l.008-.002c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664a1.05 1.05 0 00.022.004zm9.974.056v-.002.002zM6 7a2 2 0 100-4 2 2 0 000 4zm3-2a3 3 0 11-6 0 3 3 0 016 0zm4.5 0a.5.5 0 01.5.5v2a.5.5 0 01-.5.5h-2a.5.5 0 010-1H13V5.5a.5.5 0 01.5-.5z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M13 7.5a.5.5 0 01.5-.5h2a.5.5 0 010 1H14v1.5a.5.5 0 01-1 0v-2z" clip-rule="evenodd"></path></svg> Follow</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

Suggested.propTypes = {
  profilePicture: PropTypes.string,
  name: PropTypes.string.isRequired,
  location: PropTypes.string,
  bio: PropTypes.string,
};

export default Suggested;