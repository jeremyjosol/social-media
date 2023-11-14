import React from "react";
import Feed from "./Feed";
import pfpLarryDavid from "./../img/larrydavid.jpg";
import pfpDominicToretto from "./../img/dominictoretto.jpg";
import pfpRickRoss from "./../img/rickross.jpg";

const FeedList = () => {

  const mainFeedList = [
    {
      profilePicture: <img src={pfpLarryDavid} alt="Larry David" className='feed-pfp' />,
      name: (
      <React.Fragment>
      Larry David <svg className="check" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="rgb(29 161 242)" fill-rule="evenodd" clip-rule="evenodd" d="M7.67 14.72h.71L10.1 13h2.4l.5-.5v-2.42l1.74-1.72v-.71l-1.71-1.72V3.49l-.5-.49H10.1L8.38 1.29h-.71L6 3H3.53L3 3.5v2.43L1.31 7.65v.71L3 10.08v2.42l.53.5H6l1.67 1.72zM6.16 12H4V9.87l-.12-.35L2.37 8l1.48-1.51.15-.35V4h2.16l.36-.14L8 2.35l1.54 1.51.35.14H12v2.14l.17.35L13.69 8l-1.55 1.52-.14.35V12H9.89l-.38.15L8 13.66l-1.48-1.52-.36-.14zm.57-1.52h.71l3.77-3.77L10.5 6 7.09 9.42 5.71 8.04 5 8.75l1.73 1.73z"></path></svg>
      </React.Fragment>
      ),
      post: "I'm not a stop and chat kind of guy.",
    },
    {
      profilePicture: <img src={pfpDominicToretto} alt="Dom Toretto" className='feed-pfp' />,
      name: 'Dominic Toretto',
      post: "Hanging out with Family."
    },
    {
      profilePicture: <img src={pfpRickRoss} alt="Rick Ross" className='feed-pfp' />,
      name: (
        <React.Fragment>
          Rick Ross <svg className="check" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="rgb(29 161 242)" fill-rule="evenodd" clip-rule="evenodd" d="M7.67 14.72h.71L10.1 13h2.4l.5-.5v-2.42l1.74-1.72v-.71l-1.71-1.72V3.49l-.5-.49H10.1L8.38 1.29h-.71L6 3H3.53L3 3.5v2.43L1.31 7.65v.71L3 10.08v2.42l.53.5H6l1.67 1.72zM6.16 12H4V9.87l-.12-.35L2.37 8l1.48-1.51.15-.35V4h2.16l.36-.14L8 2.35l1.54 1.51.35.14H12v2.14l.17.35L13.69 8l-1.55 1.52-.14.35V12H9.89l-.38.15L8 13.66l-1.48-1.52-.36-.14zm.57-1.52h.71l3.77-3.77L10.5 6 7.09 9.42 5.71 8.04 5 8.75l1.73 1.73z"></path></svg>
        </React.Fragment>
      ),
      post: 'Shout out to all the pear. 🍐',
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