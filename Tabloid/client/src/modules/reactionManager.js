import { getToken } from "./authManager";

const baseUrl = "/api/reaction";

export const addReaction = (reaction) => {
    return getToken().then((token) =>
      fetch(baseUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(reaction),
      }).then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Error");
        }
      })
    );
  };