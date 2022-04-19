import React, { useEffect, useState } from "react";
import Tag from "./Tag";
import { getAllTags } from "../modules/tagManager";

export default function TagList() {
  const [ tags, setTags ] = useState([]);

  useEffect(() => {
    getAllTags().then(setTags);
  }, []);

  return (
    <section>
      {tags.map(t =>
        <Tag key={t.id} tag={t}/>
      )}
    </section>
  );
}