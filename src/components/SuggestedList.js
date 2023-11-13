import React from "react";
import Suggested from "./Suggested";

const SuggestedList = () => {

  const mainFeedList = [
    {
      profilePicture: 'pfp',
      name: 'Dean Blunt',
    },
    {
      profilePicture: 'pfp2',
      name: 'Dirty Dan',
    },
    {
      profilePicture: 'pfp3',
      name: 'Yuji Itadori',
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