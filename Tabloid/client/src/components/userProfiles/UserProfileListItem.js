import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { deactivateUserProfile } from "../../modules/UserProfileManager";

const UserProfileListItem = ({ profile, getProfiles, currentUserType }) => {
  const history = useHistory();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const deactivate = () => {
    deactivateUserProfile(profile).then(() => {
      getProfiles();
      handleClose();
    });
  };

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
        <Button
          color="danger"
          onClick={handleShow}
          hidden={currentUserType !== 1 ? true : false}
        >
          Deactivate
        </Button>
        <Modal isOpen={show} toggle={handleClose}>
          <ModalHeader toggle={handleClose}>
            Deactivate {profile.displayName}?
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
              <label className="font-weight-bold">Account Creation: </label>
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
            <Button
              color="danger"
              onClick={() => {
                deactivate();
              }}
            >
              Deactivate
            </Button>
          </ModalFooter>
        </Modal>
      </td>
    </tr>
  );
};

export default UserProfileListItem;
