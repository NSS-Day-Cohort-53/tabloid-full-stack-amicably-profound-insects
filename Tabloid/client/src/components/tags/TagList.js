import React, { useEffect, useState } from "react";
import Tag from "./Tag";
import { getAllTags } from "../../modules/tagManager";
import { Button } from "reactstrap";
import { useHistory } from "react-router-dom";

export default function TagList() {
  const [ tags, setTags ] = useState([]);

  const getTags = () => {
      getAllTags().then((tags) => setTags(tags));
  }

  const history = useHistory();

  useEffect(() => {
    getTags();
  }, []);

  return (
      <>
    <section>
      {tags.map(t =>
        <Tag key={t.id} tag={t}/>
      )}
    </section>
    <section>
        <Button onClick={() => history.push(`/tag/add`)}>Add a New Tag</Button>
    </section>
    </>
  );
}