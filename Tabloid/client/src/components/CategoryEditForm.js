import React, { useState, useEffect } from "react";
import { FormGroup, Label, Button, Form, Input } from "reactstrap";
import { editCategory, getCategory } from "../modules/categoryManager";
import { useHistory, Link, useParams } from "react-router-dom";

export const CategoryEditForm = () => {
  const { categoryId } = useParams();
  const [category, setCategory] = useState({
    id: 0,
    name: "",
  });

  const history = useHistory();

  useEffect(() => {
    if (categoryId) {
      getCategory(categoryId)
      .then((res) => { 
          setCategory(res)
      })}
    }, [categoryId])


    const edittingCategory = (evt) => {
        evt.preventDefault();

        editCategory(categoryId, category)
        .then(history.push("/category"))
    }

  return (
    <div>
      <h2>Edit A Category</h2>
      <Form>
        <FormGroup>
          <Label for="categoryName">Name</Label>
          <Input
            type="text"
            name="categoryName"
            id="categoryName"
            placeholder={category.name}
            value={category.name}
            onChange={(changeEvent) => {
              const copy = { ...category };
              copy.name = changeEvent.target.value;
              setCategory(copy);
            }}
          />
        </FormGroup>
      </Form>

      <Button onClick={(evt) => {
          edittingCategory(evt)
        }
      }>Save</Button>

      <Link to={`/category`}><Button>Cancel</Button></Link>
    </div>
  );
};