import React from 'react';




const UserDisplay = ({ username, image }) => {
  return (
    <div>
      <img src={image} alt={username} />
      {/* <h2>{username}</h2> */}
    </div>
  );
};

export default UserDisplay;