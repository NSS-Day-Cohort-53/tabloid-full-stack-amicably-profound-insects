import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Table } from "reactstrap";
import {
  getAllUserProfiles,
  getAllUserTypes,
  checkIfLastAdmin,
} from "../../modules/UserProfileManager";
import UserProfileListItem from "./UserProfileListItem";
import { UserTypeContext } from "./UserTypeProvider";

const UserProfilesList = () => {
  const [profiles, setProfiles] = useState([]);
  const [userTypes, setUserTypes] = useState([]);
  const [lastAdminStatus, setLastAdminStatus] = useState();
  const { currentUserType, updateCurrentUserType } =
    useContext(UserTypeContext);

  const getProfiles = () => {
    getAllUserProfiles().then((profiles) => setProfiles(profiles));
  };

  const getUserTypes = () => {
    getAllUserTypes().then((types) => setUserTypes(types));
  };

  const getLastAdminStatus = () => {
    checkIfLastAdmin().then((status) =>
      setLastAdminStatus(status.lastAdminStatus)
    );
  };

  useEffect(() => {
    getProfiles();
    getUserTypes();
    updateCurrentUserType();
    getLastAdminStatus();
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
              userTypes={userTypes}
              updateCurrentUserType={updateCurrentUserType}
              lastAdminStatus={lastAdminStatus}
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
