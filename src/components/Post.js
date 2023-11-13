import React from "react";

function Post() {
  return (
    <React.Fragment>
      <form className="form-inline">
        <div className="input-group">
          <input type="text" className="form-control post-input" placeholder="What's happening?" />
          <div className="input-group-append">
            <button className="btn btn-primary post-input-btn" type="button">Post</button>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
}

export default Post;