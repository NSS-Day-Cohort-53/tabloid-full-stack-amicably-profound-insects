import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import {
  deactivateUserProfile,
  changeUserType,
} from "../../modules/UserProfileManager";

const UserProfileListItem = ({
  profile,
  getProfiles,
  currentUserType,
  updateCurrentUserType,
  userTypes,
  lastAdminStatus,
  getLastAdminStatus,
}) => {
  const [editedProfile, setEditedProfile] = useState({ ...profile });

  const history = useHistory();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showEditModal, setShowEditModal] = useState(false);
  const handleCloseEditModal = () => setShowEditModal(false);
  const handleShowEditModal = () => setShowEditModal(true);

  const deactivate = () => {
    if (lastAdminStatus && profile.userTypeId === 1) {
      window.alert("Cannot deactivate last admin");
    } else {
      deactivateUserProfile(profile).then(() => {
        getLastAdminStatus();
        getProfiles();
        handleClose();
      });
    }
  };

  const editUserType = (event) => {
    if (lastAdminStatus && profile.userTypeId === 1) {
      window.alert("Cannot deactivate last admin");
    } else {
      changeUserType(editedProfile).then(() => {
        getLastAdminStatus();
        updateCurrentUserType();
        getProfiles();
        handleCloseEditModal();
      });
    }
  };

  return (
    <tr>
      <td>{profile.displayName}</td>
      <td>{profile.fullName}</td>
      <td>{profile.userType?.name}</td>

      <td>
        <Button
          color="primary"
          onClick={() => history.push(`/userprofiles/details/${profile.id}`)}
        >
          Details
        </Button>

        <Button
          color="secondary"
          onClick={handleShowEditModal}
          hidden={currentUserType !== 1 ? true : false}
        >
          Edit
        </Button>
        <Modal isOpen={showEditModal} toggle={handleCloseEditModal}>
          <ModalHeader toggle={handleCloseEditModal}>
            Change {profile.displayName}'s user type?
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
              <label className="font-weight-bold" htmlFor="userType">
                User type:{" "}
              </label>
              <select
                name="userType"
                id="userType"
                defaultValue={profile.userTypeId}
                onChange={(event) => {
                  const copy = { ...editedProfile };
                  copy.userTypeId = parseInt(event.target.value);
                  setEditedProfile(copy);
                }}
              >
                {userTypes.map((type) => (
                  <option key={type.id} value={type.id}>
                    {type.name}
                  </option>
                ))}
              </select>
            </div>
          </ModalBody>
          <ModalFooter>
            <div>
              {lastAdminStatus && profile.userTypeId === 1 ? (
                <p className="text-danger">
                  This user is the last admin. They cannot be demoted.
                </p>
              ) : (
                ""
              )}
            </div>
            <div>
              <Button color="secondary" onClick={handleCloseEditModal}>
                Cancel
              </Button>
              <Button
                color="primary"
                disabled={
                  lastAdminStatus && profile.userTypeId === 1 ? true : false
                }
                onClick={() => {
                  editUserType();
                }}
              >
                Save
              </Button>
            </div>
          </ModalFooter>
        </Modal>

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
            {lastAdminStatus && profile.userTypeId === 1 ? (
              <p className="text-danger">
                This user is the last admin. They cannot be deactivated.
              </p>
            ) : (
              ""
            )}
            <Button color="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button
              color="danger"
              onClick={() => {
                deactivate();
              }}
              disabled={
                lastAdminStatus && profile.userTypeId === 1 ? true : false
              }
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
