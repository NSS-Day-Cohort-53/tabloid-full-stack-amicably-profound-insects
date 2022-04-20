import React, { useContext, useEffect, useState } from "react";
import { Table } from "reactstrap";
import { getAllUserProfiles } from "../../modules/UserProfileManager";
import UserProfileListItem from "./UserProfileListItem";
import { UserTypeContext } from "./UserTypeProvider";

const UserProfilesList = () => {
  const [profiles, setProfiles] = useState([]);
  const { currentUserType, updateCurrentUserType } =
    useContext(UserTypeContext);

  const getProfiles = () => {
    getAllUserProfiles().then((profiles) => setProfiles(profiles));
  };

  useEffect(() => {
    getProfiles();
    updateCurrentUserType();
  }, []);
  return (
    <div className="container">
      <h1>List of Active User Profiles</h1>

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
            <UserProfileListItem
              profile={profile}
              key={profile.id}
              getProfiles={getProfiles}
              currentUserType={currentUserType}
            />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default UserProfilesList;
