import React from "react";
import ProfileImage from "./ProfileImage";
import ProfileInfo from "./ProfileInfo";
import Stats from "./Stats";

const Card = (props) => {
  return (
    <div className="card">
      <div className="card-background-top"></div>
      <ProfileImage />
      <div className="card-info">
        <ProfileInfo name={props.user.name} city={props.user.city} />
        <Stats
          followers={props.user.followers}
          likes={props.user.likes}
          photos={props.user.photos}
        />
      </div>
    </div>
  );
};

export default Card;
