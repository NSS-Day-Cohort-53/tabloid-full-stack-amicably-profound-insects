import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "reactstrap";

const UserProfileListItem = ({ profile }) => {
  const history = useHistory();

  return (
    <tr>
      <td>{profile.displayName}</td>
      <td>{profile.fullName}</td>
      <td>{profile.userType?.name}</td>

      <td>
        <Button
          onClick={() => history.push(`/userprofiles/details/${profile.id}`)}
        >
          Details
        </Button>
      </td>
    </tr>
  );
};

export default UserProfileListItem;
