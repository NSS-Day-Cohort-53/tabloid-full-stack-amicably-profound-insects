import { getToken, logout } from "./authManager";

const baseUrl = "/api/userprofile";

export const getAllUserProfiles = () => {
  return getToken().then((token) => {
    return fetch(`${baseUrl}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error(
          "An unknown error occurred while trying to get user profiles."
        );
      }
    });
  });
};

export const getUserProfile = (id) => {
  return getToken().then((token) => {
    return fetch(`${baseUrl}/details/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      } else if (res.status === 404) {
        return res.status;
      } else {
        throw new Error(
          "An unknown error occurred while trying to get a user profile."
        );
      }
    });
  });
};

export const deactivateUserProfile = (profile) => {
  return getToken().then((token) => {
    return fetch(`${baseUrl}/deactivate/${profile.id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(profile),
    }).then((res) => {
      if (res.ok) {
        return res.status;
      } else {
        throw new Error(
          "An unknown error occurred while trying to deactivate a user profile."
        );
      }
    });
  });
};

export const reactivateUserProfile = (profile) => {
  return getToken().then((token) => {
    return fetch(`${baseUrl}/reactivate/${profile.id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(profile),
    }).then((res) => {
      if (res.ok) {
        return res.status;
      } else {
        throw new Error(
          "An unknown error occurred while trying to reactivate a user profile."
        );
      }
    });
  });
};

export const getCurrentUserType = () => {
  return getToken().then((token) => {
    return fetch(`${baseUrl}/getCurrentUserType`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      } else if (res.status === 404) {
        return res.status;
      } else {
        throw new Error(
          "An unknown error occurred while trying to get the current user's type."
        );
      }
    });
  });
};

export const getAllUserProfilesDeactivated = () => {
  return getToken().then((token) => {
    return fetch(`${baseUrl}/deactivated`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error(
          "An unknown error occurred while trying to get user profiles."
        );
      }
    });
  });
};

export const changeUserType = (profile) => {
  return getToken().then((token) => {
    return fetch(`${baseUrl}/usertype/${profile.id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(profile),
    }).then((res) => {
      if (res.ok) {
        return res.status;
      } else {
        throw new Error(
          "An unknown error occurred while trying to change a user profile's user type."
        );
      }
    });
  });
};

export const getAllUserTypes = () => {
  return getToken().then((token) => {
    return fetch(`${baseUrl}/usertypes`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error(
          "An unknown error occurred while trying to get user types."
        );
      }
    });
  });
};

export const checkIfLastAdmin = (id) => {
  return getToken().then((token) => {
    return fetch(`${baseUrl}/lastadmincheck`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error(
          "An unknown error occurred while trying to get a check for admins status."
        );
      }
    });
  });
};
