import React from "react";
import Suggested from "./Suggested";

const SuggestedList = () => {

  const mainFeedList = [
    {
      profilePicture: 'pfp',
      name: 'Suggested User 1',
    },
    {
      profilePicture: 'pfp2',
      name: 'Suggested User 2',
    },
    {
      profilePicture: 'pfp3',
      name: 'Suggested User 3',
    }
  ];

  return (
    <React.Fragment>
      {mainFeedList.map((suggested, index) =>
        <Suggested
          profilePicture={suggested.profilePicture}
          name={suggested.name}
          key={index}/>
        )}
    </React.Fragment>
  );
}

export default SuggestedList;