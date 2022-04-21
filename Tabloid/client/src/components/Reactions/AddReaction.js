import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { Form, Input, Label, Button, FormGroup } from "reactstrap";
import { addReaction } from "../../modules/reactionManager";

export const AddReaction = () => {
  const emptyReaction = {
    name: "",
    imageLocation: "",
  };

  const history = useHistory();

  const [reaction, setReaction] = useState(emptyReaction);

  const handleSave = (evt) => {
    evt.preventDefault();

    addReaction(reaction).then((r) => {
      history.push("/");
    });
  };

  return (
    <div>
      <h2>Add A New Reaction</h2>
      <Form>
        <FormGroup>
          <Label for="reactionName">Reaction Name</Label>
          <Input
            type="text"
            name="reactionName"
            id="reactionName"
            placeholder="New Reaction Name"
            value={reaction.name}
            onChange={(changeEvent) => {
              const copy = { ...reaction };
              copy.name = changeEvent.target.value;
              setReaction(copy);
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label for="reactionUrl">Reaction Image URL</Label>
          <Input
            type="text"
            name="reactionUrl"
            id="reactionUrl"
            placeholder="New Reaction Image Url"
            value={reaction.imageLocation}
            onChange={(changeEvent) => {
              const copy = { ...reaction };
              copy.imageLocation = changeEvent.target.value;
              setReaction(copy);
            }}
          />
        </FormGroup>
      </Form>
      <Button onClick={handleSave}>Save</Button>
      <Link to={`/`}>
        <Button>Cancel</Button>
      </Link>
    </div>
  );
};
