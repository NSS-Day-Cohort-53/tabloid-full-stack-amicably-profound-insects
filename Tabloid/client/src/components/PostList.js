import React, { useEffect, useState } from "react";
import { GetAllPublishedPosts } from "../modules/postManager";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = () => {
    GetAllPublishedPosts().then((posts) => setPosts(posts));
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Category</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {posts.map((p) => (
          <tr>
            <td>{p.title}</td>
            <td>{p.userProfile.fullName}</td>
            <td>{p.category.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PostList;
