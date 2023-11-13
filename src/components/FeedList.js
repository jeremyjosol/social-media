import React from "react";
import Feed from "./Feed";

const FeedList = () => {

  const mainFeedList = [
    {
      profilePicture: 'pfp',
      name: 'User 1',
      post: 'post 1',
    },
    {
      profilePicture: 'pfp2',
      name: 'User 2',
      post: 'post 2',
    },
    {
      profilePicture: 'pfp3',
      name: 'User 3',
      post: 'post 3',
    }
  ];

  return (
    <React.Fragment>
      <hr/>
      {mainFeedList.map((feed, index) =>
        <Feed
          profilePicture={feed.profilePicture}
          name={feed.name}
          post={feed.post}
          key={index}/>
        )}
    </React.Fragment>
  );
}

export default FeedList;