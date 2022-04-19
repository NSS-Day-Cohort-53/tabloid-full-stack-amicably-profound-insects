import { getToken } from "./authManager";

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
