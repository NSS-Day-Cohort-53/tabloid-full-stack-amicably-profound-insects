import React from "react";

const UserProfileListItem = ({ profile }) => {
  return (
    <tr>
      <td>{profile.displayName}</td>
      <td>{profile.fullName}</td>
      <td>{profile.userType?.name}</td>

      <td></td>
    </tr>
  );
};

export default UserProfileListItem;
