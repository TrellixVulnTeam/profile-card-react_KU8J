import React from "react";

const Stats = (props) => {
  return (
    <div className="stats">
      <div className="stat-info">
        <p>{props.followers}</p>
        <p>Followers</p>
      </div>
      <div className="stat-info">
        <p>{props.likes}</p>
        <p>Likes</p>
      </div>
      <div className="stat-info">
        <p>{props.photos}</p>
        <p>Photos</p>
      </div>
    </div>
  );
};

export default Stats;
