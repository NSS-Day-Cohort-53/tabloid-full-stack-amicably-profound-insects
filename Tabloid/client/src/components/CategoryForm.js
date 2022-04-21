import React, { useState } from "react";
import { FormGroup, Label, Button, Form, Input } from "reactstrap";
import { addCategory } from "../modules/categoryManager";
import { useHistory, Link } from "react-router-dom";

export const CategoryForm = () => {
  const emptyCategory = {
    name: "",
  };

  const history = useHistory();

  const [category, setCategory] = useState(emptyCategory);

  const handleSave = (evt) => {
    evt.preventDefault();

    addCategory(category).then((c) => {
      history.push("/category");
    });
  };

  return (
    <div>
      <h2>Add A New Category</h2>
      <Form>
        <FormGroup>
          <Label for="categoryName">Name</Label>
          <Input
            type="text"
            name="categoryName"
            id="categoryName"
            placeholder="New Category Name"
            value={category.name}
            onChange={(changeEvent) => {
              const copy = { ...category };
              copy.name = changeEvent.target.value;
              setCategory(copy);
            }}
          />
        </FormGroup>
      </Form>
      <Button onClick={handleSave}>Save</Button>
      <Link to={`/category`}>
        <Button>Cancel</Button>
      </Link>
    </div>
  );
};
