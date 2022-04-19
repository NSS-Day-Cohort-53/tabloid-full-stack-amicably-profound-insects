import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserProfile } from "../../modules/UserProfileManager";
import avatar from "../../images/quill-logo.png";

const UserProfileDetails = () => {
  const [profile, setProfile] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getUserProfile(id).then(setProfile);
  }, []);

  if (!profile) {
    return null;
  }
  return (
    <section className="container">
      <img
        src={profile.imageLocation ? profile.imageLocation : avatar}
        alt="user avatar"
        width="200em"
      />
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
      <div></div>
    </section>
  );
};
export default UserProfileDetails;
