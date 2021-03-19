import React from "react";

const ProfileInfo = (props) => {
  return (
    <div className="name">
      <h1>{props.name}</h1>
      <h2>{props.city}</h2>
    </div>
  );
};

export default ProfileInfo;
