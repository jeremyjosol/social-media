import React from "react";

function Post() {
  return (
    <React.Fragment>
      <form className="form-inline">
          <input type="text" className="form-control" placeholder="What's happening?" />
          <div className="input-group-append">
            <button className="btn btn-outline-primary post" type="button">Post</button>
            </div>
        </form>
    </React.Fragment>
  );
}

export default Post;