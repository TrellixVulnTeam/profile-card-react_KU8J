import React from "react";

const Stats = (props) => {
  return (
    <div className="stats">
      <div className="stat-info">
        <p className="stat-number">{props.followers}</p>
        <p className="stat-name">Followers</p>
      </div>
      <div>
        <p className="stat-number">{props.likes}</p>
        <p className="stat-name">Likes</p>
      </div>
      <div>
        <p className="stat-number">{props.photos}</p>
        <p className="stat-name">Photos</p>
      </div>
    </div>
  );
};

export default Stats;
