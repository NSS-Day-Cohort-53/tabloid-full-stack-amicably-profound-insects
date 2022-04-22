import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { GetPostById } from "../modules/postManager";
import { Card, CardBody } from "reactstrap";

export const PostDetails = () => {
  const [post, setPosts] = useState({});
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    GetPostById(id).then((resp2) => {
      if (resp2 === 404) {
        history.push("posts/details/unknown");
      } else {
        setPosts(resp2);
      }
    });
  }, []);

  return (
    <div>
      <Card>
        <p>
          <strong>Title: {post.title}</strong>
        </p>
        <p>Posted by: {post.userProfile?.displayName}</p>
        <CardBody>
          {post.imageLocation !== null ? (
            <img src={post.imageLocation} alt="header" />
          ) : (
            ""
          )}
          <p />
          <p>{post.content}</p>
        </CardBody>
        <p>Published On: {post.publishDateTime}</p>
      </Card>
    </div>
  );
};
export default PostDetails;
