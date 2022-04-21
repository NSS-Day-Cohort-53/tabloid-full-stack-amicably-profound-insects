import React, { useEffect, useState } from "react";
import { GetAllPublishedPosts } from "../modules/postManager";
import { Link, useHistory } from "react-router-dom";

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
        {posts.map((p) => {
          return (
            <tr>
              <td>{p.title}</td>
              <td>{p.userProfile?.fullName}</td>
              <td>{p.category?.name}</td>
              <td>
                <Link onClick={() => history.push(`/posts/details/${p.id}`)}>
                  Details
                </Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default PostList;
