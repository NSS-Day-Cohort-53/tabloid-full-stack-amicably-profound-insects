import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

const UserProfileListItem = ({ profile }) => {
  const history = useHistory();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const deactivate = () => {};

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
        <Button color="danger" onClick={handleShow}>
          Deactivate
        </Button>
        <Modal isOpen={show} onHide={handleClose}>
          <ModalHeader closeButton>
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
              Close
            </Button>
            <Button
              color="danger"
              onClick={() => {
                handleClose();
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
