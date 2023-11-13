import React from "react";
import Suggested from "./Suggested";

const SuggestedList = () => {

  const mainFeedList = [
    {
      profilePicture: 'pfp',
      name: 'Sasquatch',
    },
    {
      profilePicture: 'pfp2',
      name: 'Mocha Joe',
    },
    {
      profilePicture: 'pfp3',
      name: 'Code Noob',
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