import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getAllUserProfilesDeactivated } from "../../modules/UserProfileManager";
import {
  Table,
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";

import { UserTypeContext } from "./UserTypeProvider";

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

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
            <tr>
              <td>{profile.displayName}</td>
              <td>{profile.fullName}</td>
              <td>{profile.userType?.name}</td>

              <td>
                <Button
                  color="danger"
                  onClick={handleShow}
                  hidden={currentUserType !== 1 ? true : false}
                >
                  Reactivate
                </Button>
                <Modal isOpen={show} toggle={handleClose}>
                  <ModalHeader toggle={handleClose}>
                    Reactivate {profile.displayName}?
                  </ModalHeader>
                  <ModalBody>
                    <div>
                      <label className="font-weight-bold">Display Name: </label>
                      <span> {profile.displayName}</span>
                    </div>
                    <div>
                      <label className="font-weight-bold">Name: </label>
                      <span> {profile.fullName}</span>
                    </div>
                    <div>
                      <label className="font-weight-bold">Email: </label>
                      <span> {profile.email}</span>
                    </div>
                    <div>
                      <label className="font-weight-bold">
                        Account Creation:{" "}
                      </label>
                      <span> {profile.createDateTimeFormatted}</span>
                    </div>
                    <div>
                      <label className="font-weight-bold">User type: </label>
                      <span> {profile.userType?.name}</span>
                    </div>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="secondary" onClick={handleClose}>
                      Cancel
                    </Button>
                    <Button color="danger" onClick={() => {}}>
                      Reactivate
                    </Button>
                  </ModalFooter>
                </Modal>
              </td>
            </tr>
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
