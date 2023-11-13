import React from "react";
import Feed from "./Feed";

const FeedList = () => {

  const mainFeedList = [
    {
      profilePicture: 'pfp',
      name: 'Larry David',
      post: "I'm not a stop and chat kind of guy.",
    },
    {
      profilePicture: 'pfp2',
      name: 'Marty Funkhouser',
      post: "RIP Dad. I'm an orphan now.",
    },
    {
      profilePicture: 'pfp3',
      name: 'J.B. Smoove',
      post: 'A text is the lowest form of communication.',
    }
  ];

  return (
    <React.Fragment>
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