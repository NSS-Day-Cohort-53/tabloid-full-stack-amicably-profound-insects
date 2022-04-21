import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

export const PostDetails = () => {
  const [post, setPosts] = useState({});
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    GetPostById(id).then((resp2) => {
      if (resp2 === 404) {
        history.push("/posts/${p.id}/");
      } else {
        setPosts(resp2);
      }
    });
  }, []);

  return (
    <div class="container pt-5">
      <div class="post">
        <section class="px-3">
          <div class="row justify-content-between">
            <p class="text-secondary">
              Written by {p.userProfile?.displayName}
            </p>

            <p class="text-black-50">Published on {p.publishDateTime}</p>
          </div>
        </section>
        <hr />
        {p.ImageLocation ? (
          <section class="row justify-content-center">
            <div>
              <img src="p.ImageLocation" />
            </div>
          </section>
        ) : (
          ""
        )}

        <section class="row post__content">
          <p class="col-sm-12 mt-5">{p.content}</p>
        </section>
      </div>
    </div>
  );
};
