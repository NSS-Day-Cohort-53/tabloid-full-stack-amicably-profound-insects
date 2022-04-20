const baseUrl = "/api/post";

export const GetAllPublishedPosts = () => {
  return fetch(baseUrl).then((res) => res.json());
};
