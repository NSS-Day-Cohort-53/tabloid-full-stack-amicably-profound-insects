import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { addTag } from "../../modules/tagManager";
import { useHistory } from 'react-router-dom';


export const TagAddForm = () => {
  const emptyTag = {
    name: "",
  };

  const history = useHistory();

  const [tag, setTag] = useState(emptyTag);

  const handleSave = (evt) => {
      evt.preventDefault();

      addTag(tag).then((t) => {
          history.push("/tag");
      });
  };

  return (
        <div>
        <h2>Add A New Tag</h2>
        <Form>
        <FormGroup>
            <Label for="name">Name</Label>
            <Input type="text" name="name" id="name" placeholder="Tag Name"
            value={tag.name}
            onChange={(changeEvent) => {
                const copy = { ...tag };
                copy.name = changeEvent.target.value;
                setTag(copy);
            }}
            />
        </FormGroup>
        </Form>
        <Button onClick={handleSave}>Save</Button>
        </div>
    );
}; 
  

