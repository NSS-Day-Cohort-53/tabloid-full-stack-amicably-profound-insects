import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Button, Table } from "reactstrap";
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
      <Link
        hidden={currentUserType !== 1 ? true : false}
        to="userprofiles/deactivated/"
      >
        View Deactivated Accounts
      </Link>
    </div>
  );
};

export default UserProfilesList;
