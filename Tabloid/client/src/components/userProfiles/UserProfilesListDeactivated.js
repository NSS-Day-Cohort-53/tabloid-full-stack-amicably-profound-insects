import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getAllUserProfilesDeactivated } from "../../modules/UserProfileManager";
import { Table, Button } from "reactstrap";

import { UserTypeContext } from "./UserTypeProvider";
import UserProfileListItemDeactivated from "./UserProfilesListItemDeactivated";

const UserProfilesListDeactivated = () => {
  const [profiles, setProfiles] = useState([]);
  const { currentUserType, updateCurrentUserType } =
    useContext(UserTypeContext);
  const history = useHistory();

  const getDeactivatedProfiles = () => {
    getAllUserProfilesDeactivated().then((profiles) => setProfiles(profiles));
  };

  useEffect(() => {
    getDeactivatedProfiles();
    updateCurrentUserType();
  }, []);

  if (currentUserType !== 1) {
    return null;
  }

  return (
    <div className="container">
      <h1>List of Deactivated User Profiles</h1>

      <Table className="table table-striped">
        <thead>
          <tr>
            <th>Display Name</th>
            <th>Name</th>
            <th>User Type</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {profiles.map((profile) => (
            <UserProfileListItemDeactivated
              profile={profile}
              key={profile.id}
              getDeactivatedProfiles={getDeactivatedProfiles}
            />
          ))}
        </tbody>
      </Table>
      <Button color="secondary" onClick={() => history.push("/userProfiles")}>
        Back
      </Button>
    </div>
  );
};

export default UserProfilesListDeactivated;
