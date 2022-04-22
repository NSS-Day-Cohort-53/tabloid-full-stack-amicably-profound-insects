import { getToken } from "./authManager";

const baseUrl = "/api/tag";

export const getAllTags = () => {
  return getToken().then((token) => {
    return fetch(baseUrl, {
          method: "GET",
          headers: {
              Authorization: `Bearer ${token}`
            }
        }).then(res => {
          if (res.ok) {
            return res.json();
          } else {
            throw new Error("An unknown error occurred while trying to get tags.");
        }
    });
  });
};

export const addTag = (tag) => {
    return getToken().then((token) => {
      return fetch(baseUrl, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
              },
              body: JSON.stringify(tag)
          }).then(res => {
            if (res.ok) {
              return res.json();
            } else  {
              throw new Error("An unknown error occurred while trying to save a new tag.");
          }
      });
    });
  };