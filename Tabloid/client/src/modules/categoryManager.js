import { getToken } from "./authManager";

const baseUrl = "/api/category";

export const getAllCategories = () => {
  return getToken().then((token) =>
    fetch(`${baseUrl}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Error");
      }
    })
  );
};

export const addCategory = (category) => {
  return getToken().then((token) =>
    fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(category),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Error");
      }
    })
  );
};

export const deleteCategory = (id) => {
  return getToken().then((token) =>
    fetch(`${baseUrl}/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  );
};

export const getCategory = (id) => {
  return getToken().then((token) =>
    fetch(`${baseUrl}/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Error");
      }
    })
  );
};

export const editCategory = (id, category) => {
  return getToken().then((token) => {
    fetch(`${baseUrl}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(category),
    });
  });
};