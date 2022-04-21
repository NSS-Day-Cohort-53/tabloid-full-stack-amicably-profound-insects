import React, { useState } from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { reactivateUserProfile } from "../../modules/UserProfileManager";

const UserProfileListItemDeactivated = ({
  profile,
  getDeactivatedProfiles,
}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const reactivate = () => {
    reactivateUserProfile(profile).then(() => {
      getDeactivatedProfiles();
      handleClose();
    });
  };

  return (
    <tr>
      <td>{profile.displayName}</td>
      <td>{profile.fullName}</td>
      <td>{profile.userType?.name}</td>

      <td>
        <Button color="danger" onClick={handleShow}>
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
            <Button color="danger" onClick={reactivate}>
              Reactivate
            </Button>
          </ModalFooter>
        </Modal>
      </td>
    </tr>
  );
};

export default UserProfileListItemDeactivated;
